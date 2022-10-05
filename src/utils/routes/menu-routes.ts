import { ContainerOutlined, GoldOutlined } from '@ant-design/icons';
import { Paths } from './paths';
import { TFunction } from 'react-i18next';

interface ISubMenu {
  name: string;
  to: Paths;
}

export interface IMenuRoute {
  name: string;
  to: {
    path: Paths;
    strongEq: boolean;
  }[];
  Icon: typeof ContainerOutlined;
  subMenu: false | ISubMenu[];
  notice: false | number;
}

export const MainMenuRoutes: (t: TFunction<string[]>) => IMenuRoute[] = (t) => [
  {
    name: t(`menu.addresses`),
    to: [
      {
        path: Paths.ADDRESSES,
        strongEq: true,
      },
    ],
    Icon: ContainerOutlined,
    subMenu: false,
    notice: false,
  },
  {
    name: t(`menu.transactions`),
    to: [
      {
        path: Paths.TRANSACTIONS,
        strongEq: true,
      },
    ],
    Icon: GoldOutlined,
    subMenu: false,
    notice: false,
  },
];
