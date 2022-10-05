import React, { FC, useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { HeaderStyles } from './header';
import { BlockShadow } from '../../styles/mixins';
import { ZIndex } from '../../styles/z-index';
import { MainMenuRoutes } from '../../utils/routes/menu-routes';
import { MenuItem, MenuSettings } from './menu-item';
import { useTranslation } from 'react-i18next';
import { LocaleKeys } from '../../locale';

const MenuWrapper = BlockShadow({
  target: styled('div')<{ opened: boolean }>`
    top: ${HeaderStyles.height};
    left: 0;
    position: fixed;
    height: calc(${MenuSettings.height} - ${HeaderStyles.height});
    width: ${(props) =>
      props.opened ? MenuSettings.fullWidth : MenuSettings.width};
    z-index: ${ZIndex.Z6};
    overflow: hidden;
    background-color: ${({ theme }) => theme.COLORS.WHITE.C100};
    padding: 22px 12px 16px 12px;
    transition: background-color 0.3s ease-out, width 0.3s ease-out;
  `,
});

const MenuInner = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Menu: FC = () => {
  const { t } = useTranslation([LocaleKeys.LAYOUT]);

  const [opened, setOpened] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setOpened(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpened(false);
  }, []);

  const multilingualMenu = useMemo(() => MainMenuRoutes(t), [t]);

  return (
    <MenuWrapper
      opened={opened}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MenuInner>
        {multilingualMenu.map((menuItem) => (
          <MenuItem
            key={menuItem.to[0].path}
            menuOpened={opened}
            menuItem={menuItem}
          />
        ))}
      </MenuInner>
    </MenuWrapper>
  );
};
