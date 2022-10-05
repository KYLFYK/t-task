import React, { FC, useCallback, useState } from 'react';
import { TFunction } from 'react-i18next';
import { Button, Form } from 'antd';
import { Input } from '../common/inputs';

interface Props {
  t: TFunction<string[]>;
  handleAddNewChain: (name: string) => void;
}

export const NewAddress: FC<Props> = ({ t, handleAddNewChain }) => {
  const [name, setName] = useState<string | undefined>(undefined);

  const handleSubmit = useCallback(() => {
    if (name) {
      handleAddNewChain(name);
    }
  }, [name, handleAddNewChain]);

  return (
    <Form
      style={{
        display: 'flex',
        gap: 12,
      }}
    >
      <Form.Item
        style={{
          width: 300,
        }}
      >
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={t('add.placeholder')}
          width={300}
        />
      </Form.Item>
      <Button type={'primary'} onClick={handleSubmit}>
        {t('add.submit')}
      </Button>
    </Form>
  );
};
