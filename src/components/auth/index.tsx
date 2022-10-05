import styled from '@emotion/styled';
import React, { FC, PropsWithChildren } from 'react';
import { TextConstants } from '../../utils/common/text-constants';
import { LangSwitcher } from '../common/langSwitcher';
import { ThemeSwitcher } from '../common/themeSwitcher';

export const AuthWrapperLayout = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.COLORS.GRADIENT.PRIMARY};
`;

const AuthMainWrapper = styled('div')`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
  transition: background-color 0.3s ease-out;
  box-shadow: 0 100px 80px rgba(0, 0, 0, 0.24),
    0 41.7776px 33.4221px rgba(0, 0, 0, 0.172525),
    0 22.3363px 17.869px rgba(0, 0, 0, 0.143066),
    0 12.5216px 10.0172px rgba(0, 0, 0, 0.12),
    0 6.6501px 5.32008px rgba(0, 0, 0, 0.0969343),
    0 2.76726px 2.21381px rgba(0, 0, 0, 0.0674749);
  padding: 30px;
`;

const CompanyName = styled('span')<{ letter: string }>`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.TEXT.COMMON_TEXT};
  display: block;
  transition: color 0.3s ease-out;

  &::before {
    content: '${({ letter }) => letter}';
    color: ${({ theme }) => theme.COLORS.ACCENT.PRIMARY};
    transition: color 0.3s ease-out;
  }
`;

const AuthHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 130px;
`;

const AuthHeaderContent = styled('div')`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AuthSecondaryWrapper = styled('div')`
  flex: 1;
`;

const AuthContent = styled('div')`
  margin: 0 auto;
  width: 300px;
`;

export const AuthWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AuthWrapperLayout>
      <AuthMainWrapper>
        <AuthHeader>
          <CompanyName letter={TextConstants.COMPANY_NAME[0]}>
            {TextConstants.COMPANY_NAME.slice(
              1,
              TextConstants.COMPANY_NAME.length
            )}
          </CompanyName>
          <AuthHeaderContent>
            <LangSwitcher />
            <ThemeSwitcher />
          </AuthHeaderContent>
        </AuthHeader>
        <AuthContent>{children}</AuthContent>
      </AuthMainWrapper>
      <AuthSecondaryWrapper />
    </AuthWrapperLayout>
  );
};
