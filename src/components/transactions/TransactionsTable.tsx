import React, { FC, useEffect, useMemo, useState } from 'react';
import { TFunction } from 'react-i18next';
import { metamaskHooks } from '../../utils/connectors/metamask';
import { ITransaction, ScanApi } from '../../scan-api';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import moment from 'moment';
import { formatEther } from '@ethersproject/units';

interface Props {
  t: TFunction<string[]>;
}

interface DataType {
  key: string;
  from: string;
  to: string;
  gasPrice: string;
  timeStamp: string;
  transaction: string;
  value: string;
}

const { useAccount } = metamaskHooks;

export const TransactionsTable: FC<Props> = ({ t }) => {
  const account = useAccount();
  const [loaded, setLoaded] = useState<false | string>(false);
  const [isPending, setIsPending] = useState(false);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const [dataTable, setDataTable] = useState<DataType[]>([]);

  useEffect(() => {
    if (
      (account && !loaded && !isPending) ||
      (account && loaded && loaded !== account && !isPending)
    ) {
      setIsPending(true);
      ScanApi.getTransactions(account).then((r) => {
        setTransactions(r.data.result);
        setIsPending(false);
        setLoaded(account);
      });
    }
  }, [loaded, account, isPending]);

  const columns: ColumnsType<DataType> = useMemo(
    () => [
      {
        title: t('table.transaction'),
        dataIndex: 'transaction',
        key: 'transaction',
      },
      {
        title: t('table.gasPrice'),
        dataIndex: 'gasPrice',
        key: 'gasPrice',
        render: (value) => {
          return `${value} ETH`;
        },
      },
      {
        title: t('table.from'),
        dataIndex: 'from',
        key: 'from',
      },
      {
        title: t('table.to'),
        dataIndex: 'to',
        key: 'to',
      },
      {
        title: t('table.value'),
        dataIndex: 'value',
        key: 'value',
      },
      {
        title: t('table.timeStamp'),
        dataIndex: 'timeStamp',
        key: 'timeStamp',
      },
    ],
    [t]
  );

  useEffect(() => {
    setDataTable(
      transactions.map((transaction) => ({
        key: transaction.hash,
        from: transaction.from,
        to: transaction.to,
        gasPrice: formatEther(transaction.gasPrice),
        timeStamp: moment
          .unix(Number(transaction.timeStamp))
          .format('DD.MM.YYYY HH:mm'),
        transaction: transaction.hash,
        value: `${Number(transaction.value) / 1000000000000000000} ETH`,
      }))
    );
  }, [transactions]);

  return (
    <>
      {isPending ? (
        <LoadingOutlined />
      ) : (
        <Table
          scroll={{ x: 'calc(100% - 40px)' }}
          columns={columns}
          dataSource={dataTable}
          pagination={false}
        />
      )}
    </>
  );
};
