import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Header, HeaderStyles } from '../layout/header';
import { Menu } from '../layout/menu';
import { MenuSettings } from '../layout/menu-item';

const AppContainer = styled('div')`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  max-width: 100vw;
  max-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  padding-top: calc(${HeaderStyles.height} + 20px);
  padding-left: calc(${MenuSettings.width} + 20px);
  background-color: ${({ theme }) => theme.COLORS.WHITE.C300};
  transition: background-color 0.3s ease-out;
  color: ${({ theme }) => theme.COLORS.TEXT.COMMON_TEXT};

  ::-webkit-scrollbar {
    background: transparent;
    width: 6px;
    max-width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.WHITE.C200};
    border-radius: 3px;
    width: 6px;
    height: 6px;
  }
`;

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <AppContainer>
      {children}
      <Header />
      <Menu />
    </AppContainer>
  );
};
