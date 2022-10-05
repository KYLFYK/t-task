import { useAppSelector } from '../index';

export const useLocaleSelector = () =>
  useAppSelector((state) => state.application.locale);
export const useThemeSelector = () =>
  useAppSelector((state) => state.application.theme);
