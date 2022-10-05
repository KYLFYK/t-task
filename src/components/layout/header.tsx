import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ZIndex } from '../../styles/z-index';
import { BlockShadow } from '../../styles/mixins';
import { BaseLink } from '../common/links';
import { Input } from '../common/inputs';
import { TextConstants } from '../../utils/common/text-constants';
import { ThemeSwitcher } from '../common/themeSwitcher';
import { Colors } from '../../styles';
import { SearchIcon } from '../icons/SearchIcon';
import { LangSwitcher } from '../common/langSwitcher';
import { UserMainCard } from '../common/UserMainCard';
import { metamaskHooks } from '../../utils/connectors/metamask';
import { useTranslation } from 'react-i18next';
import { LocaleKeys } from '../../locale';

export const HeaderStyles = {
  width: '100vw',
  height: '60px',
};

const HeaderWrapper = BlockShadow({
  target: styled('div')`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${HeaderStyles.height};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: ${ZIndex.Z5};
    background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
    transition: background-color 0.3s ease-out;
  `,
});

const Logo = styled(BaseLink)`
  width: ${HeaderStyles.height};
  height: ${HeaderStyles.height};
  background-color: ${({ theme }) => theme.COLORS.ACCENT.PRIMARY};
  color: ${Colors.WHITE100};
  line-height: ${HeaderStyles.height};
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  text-transform: uppercase;

  :hover {
    color: ${Colors.WHITE100};
  }
`;

const HeaderContent = styled('div')`
  flex: 1;
  display: flex;
  padding-left: 40px;
  align-items: center;
  justify-content: space-between;
`;

const LeftHeaderContent = styled('div')`
  display: flex;
  align-items: center;
`;

const RightHeaderContent = styled('div')`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

const UtilsContainer = styled('div')`
  display: flex;
  gap: 30px;
`;

const CompanyName = styled('span')`
  color: ${({ theme }) => theme.COLORS.TEXT.COMMON_TEXT};
  font-weight: 700;
  margin-right: 60px;
  font-size: 18px;
  line-height: 26px;
  height: 26px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-out;
`;

const UserWrapper = styled('div')`
  padding-left: 62px;
`;

const { useAccount } = metamaskHooks;

export const Header: FC = () => {
  const account = useAccount();
  const { t } = useTranslation([LocaleKeys.LAYOUT]);

  return (
    <HeaderWrapper>
      <Logo to={'/'}>{TextConstants.COMPANY_NAME[0]}</Logo>
      <HeaderContent>
        <LeftHeaderContent>
          <CompanyName>{TextConstants.COMPANY_NAME}</CompanyName>
          <Input
            placeholder={t('header.search')}
            suffix={
              <SearchIcon
                size={20}
                fill={Colors.DISABLED_ICON}
                style={{
                  cursor: 'pointer',
                }}
              />
            }
            style={{
              width: 350,
              height: 36,
              padding: '0px 11px',
            }}
          />
        </LeftHeaderContent>
        <RightHeaderContent>
          <UtilsContainer>
            <LangSwitcher />
            <ThemeSwitcher />
          </UtilsContainer>
          {account && (
            <UserWrapper>
              <UserMainCard account={account} />
            </UserWrapper>
          )}
        </RightHeaderContent>
      </HeaderContent>
    </HeaderWrapper>
  );
};
