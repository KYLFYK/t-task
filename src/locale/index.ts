import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Layout locale
import layoutEn from './layout/en.json';
import layoutRu from './layout/ru.json';

// Login locale
import loginEn from './login/en.json';
import loginRu from './login/ru.json';

// Addresses locale
import addressesEn from './addresses/en.json';
import addressesRu from './addresses/ru.json';

// Transactions locale
import transactionsEn from './transactions/en.json';
import transactionsRu from './transactions/ru.json';

export enum LocaleKeys {
  LAYOUT = 'layout',
  LOGIN = 'login',
  ADDRESSES = 'addresses',
  TRANSACTIONS = 'transactions',
}

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        [LocaleKeys.LAYOUT]: layoutEn,
        [LocaleKeys.LOGIN]: loginEn,
        [LocaleKeys.ADDRESSES]: addressesEn,
        [LocaleKeys.TRANSACTIONS]: transactionsEn,
      },
      ru: {
        [LocaleKeys.LAYOUT]: layoutRu,
        [LocaleKeys.LOGIN]: loginRu,
        [LocaleKeys.ADDRESSES]: addressesRu,
        [LocaleKeys.TRANSACTIONS]: transactionsRu,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {});

export default i18n;
