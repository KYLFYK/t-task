import React, { FC } from 'react';
import styled from '@emotion/styled';
import { PageContent, PageHeader, TitleThemed } from '../addresses';
import { TransactionsTable } from '../../components/transactions/TransactionsTable';
import { useTranslation } from 'react-i18next';
import { LocaleKeys } from '../../locale';
import { NewTransaction } from '../../components/transactions/NewTransaction';

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

export const Transactions: FC = () => {
  const { t } = useTranslation([LocaleKeys.TRANSACTIONS]);

  return (
    <Wrapper>
      <ContentWrapper>
        <PageHeader>
          <TitleThemed level={3}>{t('title')}</TitleThemed>
        </PageHeader>
        <PageContent>
          <TransactionsTable t={t} />
        </PageContent>
        <PageContent>
          <NewTransaction t={t} />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  );
};
