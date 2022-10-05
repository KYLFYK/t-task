import React, { FC, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { useThemeSelector } from '../../ducks/application/selectors';
import {
  setTheme,
  ThemeType,
} from '../../ducks/application/services/themeSlice';
import { useAppDispatch } from '../../ducks';

const Wrapper = styled('div')`
  height: 24px;
  width: 48px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.COLORS.WHITE.C400};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  cursor: pointer;
  padding: 2px;
  position: relative;
  transition: background-color 0.3s ease-out;
`;

const ThemeSelectItem = styled('div')`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg path {
    transition: fill 0.3s ease-out, stroke 0.3s ease-out;
  }
`;

const Slider = styled('div')<{ currentTheme: ThemeType }>`
  position: absolute;
  left: 2px;
  transform: translateX(
    ${(props) => (props.currentTheme === 'light' ? '0' : '24px')}
  );
  transition: transform 0.3s ease-out, background-color 0.3s ease-out;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.ACCENT.SECONDARY};
`;

export const ThemeSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useThemeSelector();
  const theme = useCurrentTheme();

  const handleSwitchTheme = useCallback(() => {
    dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  }, [currentTheme, dispatch]);

  useEffect(() => {}, [currentTheme]);

  return (
    <Wrapper onClick={handleSwitchTheme}>
      <Slider currentTheme={currentTheme} />
      <ThemeSelectItem>
        <SunIcon
          fill={
            currentTheme === 'light'
              ? theme.COLORS.WHITE.C100
              : theme.COLORS.ACCENT.SECONDARY
          }
        />
      </ThemeSelectItem>
      <ThemeSelectItem>
        <MoonIcon
          fill={
            currentTheme === 'dark'
              ? theme.COLORS.WHITE.C100
              : theme.COLORS.ACCENT.SECONDARY
          }
        />
      </ThemeSelectItem>
    </Wrapper>
  );
};
