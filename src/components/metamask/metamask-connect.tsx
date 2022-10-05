import React, { FC, useCallback } from 'react';
import { Button, Space } from 'antd';
import { TFunction } from 'react-i18next';
import { metaMask } from '../../utils/connectors/metamask';

interface Props {
  t: TFunction<string[]>;
}

export const MetamaskConnect: FC<Props> = ({ t }) => {
  const onClickConnect = useCallback(() => {
    void metaMask.activate();
  }, [metaMask]);

  return (
    <div>
      <Space direction={'vertical'}>
        <Button type="primary" onClick={onClickConnect}>
          {t('connect')}
        </Button>
      </Space>
    </div>
  );
};
