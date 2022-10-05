import React, { FC, useCallback, useState } from 'react';
import { Button, Form } from 'antd';
import { Input } from '../common/inputs';
import { parseUnits } from '@ethersproject/units';
import { metaMask, metamaskHooks } from '../../utils/connectors/metamask';
import { TFunction } from 'react-i18next';

interface IFormValues {
  to: string;
  value: string;
}

const { useAccount } = metamaskHooks;

interface Props {
  t: TFunction<string[]>;
}

export const NewTransaction: FC<Props> = ({ t }) => {
  const account = useAccount();
  const [pending, setIsPending] = useState(false);

  const handleSubmit = useCallback(
    (values: IFormValues) => {
      if (account) {
        setIsPending(true);
        metaMask.provider
          ?.request({
            method: 'eth_sendTransaction',
            params: [
              {
                from: account,
                to: values.to,
                value: parseUnits(values.value)._hex,
              },
            ],
          })
          .then((r) => {
            console.log(r);
            setIsPending(false);
          })
          .catch(() => {
            setIsPending(false);
          });
      }
    },
    [account]
  );

  const [form] = Form.useForm();

  return (
    <Form<IFormValues>
      style={{
        display: 'flex',
        gap: 12,
      }}
      form={form}
      onFinish={handleSubmit}
    >
      <Form.Item
        style={{
          width: 300,
        }}
        name={'to'}
        required
        rules={[
          {
            required: true,
            message: t('new.required'),
          },
        ]}
      >
        <Input placeholder={t('new.to')} width={300} />
      </Form.Item>
      <Form.Item
        style={{
          width: 100,
        }}
        name={'value'}
        required
        rules={[
          {
            required: true,
            message: t('new.required'),
          },
        ]}
      >
        <Input
          suffix={'ETH'}
          type={'text'}
          placeholder={t('new.count')}
          width={100}
        />
      </Form.Item>
      <Form.Item>
        <Button loading={pending} type={'primary'} onClick={form.submit}>
          {t('new.send')}
        </Button>
      </Form.Item>
    </Form>
  );
};
