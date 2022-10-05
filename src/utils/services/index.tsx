import React, { FC, Fragment, PropsWithChildren } from 'react';
import { LocaleService } from './LocaleService';
import { ThemeService } from './ThemeService';
import { AuthService } from './AuthService';

export const AppService: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Fragment>
      <ThemeService>
        <LocaleService>
          <AuthService>{children}</AuthService>
        </LocaleService>
      </ThemeService>
    </Fragment>
  );
};
