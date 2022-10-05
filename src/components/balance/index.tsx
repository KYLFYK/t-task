import React, { FC, useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { metamaskHooks } from '../../utils/connectors/metamask';
import { BigNumber } from 'ethers';
import { formatEther } from '@ethersproject/units';

const { useProvider, useAccount } = metamaskHooks;

export const Balance: FC = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState<BigNumber | undefined>(undefined);

  const provider = useProvider();
  const account = useAccount();

  useEffect(() => {
    if (provider && account) {
      setLoading(true);
      provider.getBalance(account).then((r) => {
        setValue(r);
        setLoading(false);
        return r;
      });
    }
  }, [account, provider]);

  return (
    <>
      {loading ? (
        <LoadingOutlined />
      ) : value ? (
        <span>{formatEther(value)} ETH</span>
      ) : (
        ''
      )}
    </>
  );
};
