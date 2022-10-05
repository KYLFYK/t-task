import { useAppSelector } from '../index';

export const useAddressesSelect = () =>
  useAppSelector((state) => state.addresses.list);
