import React, { FC, useEffect, useMemo, useState } from 'react';
import { TFunction } from 'react-i18next';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import { BigNumber } from 'ethers';
import { metamaskHooks, metaMask } from '../../utils/connectors/metamask';
import { LoadingOutlined } from '@ant-design/icons';
import { formatEther } from '@ethersproject/units';
import { useCurrentTheme } from '../../utils/services/ThemeService';

interface DataType {
  key: string;
  address: string;
  balance: BigNumber | undefined;
  isActive?: boolean;
}

interface Props {
  t: TFunction<string[]>;
}

const { useProvider, useAccounts, useAccount, useIsActive } = metamaskHooks;

export const AddressesTable: FC<Props> = ({ t }) => {
  const theme = useCurrentTheme();
  const [tableData, setTableData] = useState<DataType[]>([]);

  const account = useAccount();
  const accounts = useAccounts();
  const provider = useProvider();
  const isActive = useIsActive();

  const columns: ColumnsType<DataType> = useMemo(
    () => [
      {
        title: t('table.address'),
        dataIndex: 'address',
        key: 'address',
        width: '80%',
        render: (value, r) => {
          return (
            <span
              style={{
                color: r.isActive
                  ? theme.COLORS.TEXT.PRIMARY
                  : theme.COLORS.TEXT.COMMON_TEXT,
              }}
            >
              {value}
            </span>
          );
        },
      },
      {
        title: t('table.balance'),
        dataIndex: 'balance',
        key: 'balance',
        width: '20%',
        render: (value) => {
          return `${formatEther(value)} ETH`;
        },
      },
    ],
    [t, theme]
  );

  useEffect(() => {
    if (provider && accounts && account && isActive) {
      let stale = false;
      setLoading(true);

      metaMask.provider
        ?.request({
          method: 'wallet_getPermissions',
          params: [],
        })
        .then((r: any) => {
          const accountsList: string[] = r[0].caveats[0].value;

          Promise.all(accountsList.map((acc) => provider.getBalance(acc))).then(
            (balances) => {
              setTableData(
                accountsList.map((acc, i) => ({
                  key: acc,
                  address: acc,
                  balance: balances[i],
                  isActive: acc.toLowerCase() === account.toLowerCase(),
                }))
              );
              setLoading(false);
            }
          );
        });

      return () => {
        stale = true;
      };
    }
  }, [provider, account, accounts, isActive]);

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <Table columns={columns} dataSource={tableData} pagination={false} />
      )}
    </>
  );
};
