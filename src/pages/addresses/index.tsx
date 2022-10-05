import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { AddressesTable } from '../../components/addresses/AddressesTable';
import { LocaleKeys } from '../../locale';
import { useTranslation } from 'react-i18next';
import { Sizes } from '../../styles';
import { metaMask } from '../../utils/connectors/metamask';
import { NewAddress } from '../../components/addresses/NewAddress';

const { Title } = Typography;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled('div')`
  flex: 1;
`;

export const PageHeader = styled('div')`
  padding-top: 10px;
`;

export const PageContent = styled('div')`
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  padding: 12px;
  border-radius: ${Sizes.BORDER_RADIUS_SM};
  transition: background-color 0.3s ease-out;
`;

export const TitleThemed = styled(Title)`
  color: ${({ theme }) => theme.COLORS.TEXT.COMMON_TEXT} !important;
`;

export const Addresses: FC = () => {
  const { t } = useTranslation([LocaleKeys.ADDRESSES]);

  const handleAddNewChain = useCallback((name: string) => {
    metaMask.provider
      ?.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x3',
            chainName: name,
            rpcUrls: ['https://ropsten.infura.io/v3/'] /* ... */,
            blockExplorerUrls: ['https://ropsten.etherscan.io'],
          },
        ],
      })
      .then((r) => {
        console.log(r);
      });
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        <PageHeader>
          <TitleThemed level={3}>{t('title')}</TitleThemed>
        </PageHeader>
        <PageContent>
          <AddressesTable t={t} />
        </PageContent>
        <PageContent>
          <NewAddress t={t} handleAddNewChain={handleAddNewChain} />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  );
};
