import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { Theme, ThemeProvider } from '@emotion/react';
import { MainColorsDark, MainColorsLight } from '../../styles';
import { useThemeSelector } from '../../ducks/application/selectors';

export const lightTheme: Theme = {
  COLORS: MainColorsLight,
};

export const darkTheme: Theme = {
  COLORS: MainColorsDark,
};

export const useCurrentTheme: () => Theme = () => {
  const { currentTheme } = useThemeSelector();

  return useMemo(() => {
    return currentTheme === 'dark' ? darkTheme : lightTheme;
  }, [currentTheme]);
};

export const ThemeService: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { currentTheme } = useThemeSelector();

  const theme: Theme = useMemo(() => {
    return currentTheme === 'dark' ? darkTheme : lightTheme;
  }, [currentTheme]);

  useEffect(() => {
    const root = document.documentElement;

    Object.keys(theme.COLORS.WHITE).forEach((whiteKey) => {
      root.style.setProperty(
        `--white${whiteKey}`,
        theme.COLORS.WHITE[whiteKey as keyof typeof theme.COLORS.WHITE]
      );
    });

    Object.keys(theme.COLORS.TEXT).forEach((textColorKey) => {
      root.style.setProperty(
        `--text-${textColorKey}`,
        theme.COLORS.TEXT[textColorKey as keyof typeof theme.COLORS.TEXT]
      );
    });

    Object.keys(theme.COLORS.ACCENT).forEach((accentColorKey) => {
      root.style.setProperty(
        `--accent-${accentColorKey}`,
        theme.COLORS.ACCENT[accentColorKey as keyof typeof theme.COLORS.ACCENT]
      );
    });
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
