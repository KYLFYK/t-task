import React, {
  FC,
  PropsWithChildren,
  Fragment,
  useEffect,
  useMemo,
} from 'react';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useLocaleSelector } from '../../ducks/application/selectors';

import ant_en from 'antd/lib/locale/en_US';
import ant_ru from 'antd/lib/locale/ru_RU';

export const LocaleService: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { i18n } = useTranslation();
  const appLocale = useLocaleSelector();

  const antLocale = useMemo(() => {
    switch (appLocale.lang) {
      case 'en':
        return ant_en;
      case 'ru':
        return ant_ru;
      default:
        return ant_ru;
    }
  }, [appLocale]);

  useEffect(() => {
    if (appLocale.lang) {
      moment.locale(appLocale.lang);
      moment.locale();
    }
  }, [appLocale]);

  useEffect(() => {
    i18n.changeLanguage(appLocale.lang);
  }, [appLocale, i18n]);

  return (
    <Fragment>
      <ConfigProvider locale={antLocale}>{children}</ConfigProvider>
    </Fragment>
  );
};
