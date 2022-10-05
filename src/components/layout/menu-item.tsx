import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Colors, Sizes } from '../../styles';
import { ArrowDown } from '../icons/ArrowDown';
import { IMenuRoute } from '../../utils/routes/menu-routes';
import styled from '@emotion/styled';
import { NavLink, useLocation } from 'react-router-dom';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { CountMarker } from '../common/CountMarker';

export const MenuSettings = {
  width: '60px',
  fullWidth: '248px',
  height: '100vh',
};

interface Props {
  menuItem: IMenuRoute;
  menuOpened: boolean;
}

const MenuItemWrapper = styled(NavLink)`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`;

const MenuItemName = styled('span')<{ active: boolean }>`
  color: ${(props) =>
    props.active
      ? props.theme.COLORS.TEXT.PRIMARY
      : props.theme.COLORS.TEXT.COMMON_TEXT};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  transition: color 0.3s ease-out;
`;

const SubMenuWrapper = styled('div')<{ active: boolean; count: number }>`
  height: ${(props) => (props.active ? `${props.count * 20 - 4}px` : 0)};
  transition: height 0.3s ease-out;
  overflow: hidden;
  margin-left: calc(${MenuSettings.width} - 10px);
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px;

  ::before {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${(props) => props.theme.COLORS.WHITE.C400};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const IconContainer = styled('div')`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C300};
  border-radius: ${Sizes.BORDER_RADIUS};
  transition: background-color 0.3s ease-out;
`;

const SubMenuItem = styled(NavLink)<{ active: 'true' | 'false' }>`
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  color: ${(props) =>
    props.active === 'true'
      ? props.theme.COLORS.TEXT.PRIMARY
      : props.theme.COLORS.TEXT.HEADING};
  position: relative;

  :hover {
    color: ${(props) =>
      props.active === 'true'
        ? props.theme.COLORS.TEXT.PRIMARY
        : props.theme.COLORS.TEXT.COMMON_TEXT};
  }

  ::after {
    content: '';
    display: block;
    width: 1px;
    height: 16px;
    background-color: ${(props) =>
      props.active === 'true'
        ? props.theme.COLORS.ACCENT.PRIMARY
        : Colors.TRANSPARENT};
    transition: background-color 0.3s ease-out;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const MenuItem: FC<Props> = ({ menuItem, menuOpened }) => {
  const location = useLocation();
  const theme = useCurrentTheme();

  const [subMenuActive, setSubMenuActive] = useState(false);
  const haveActiveSubMenu = useMemo(() => {
    if (menuItem.subMenu) {
      let result = false;

      menuItem.subMenu.forEach((item) => {
        if (location.pathname.indexOf(item.to) > -1) {
          result = true;
        }
      });

      return result;
    } else return false;
  }, [menuItem, location]);

  const isActive = useMemo(() => {
    let result = false;

    menuItem.to.forEach((pathItem) => {
      if (pathItem.strongEq && pathItem.path === location.pathname) {
        result = true;
      } else if (
        !pathItem.strongEq &&
        location.pathname.indexOf(pathItem.path) > -1
      ) {
        result = true;
      }
    });

    return result;
  }, [location, menuItem]);

  const Icon = useMemo(() => menuItem.Icon, [menuItem]);

  const handleItemHover = useCallback(() => {
    setSubMenuActive(true);
  }, []);

  const handleItemBlur = useCallback(() => {
    setSubMenuActive(false);
  }, []);

  useEffect(() => {
    if (haveActiveSubMenu && menuOpened && !subMenuActive) {
      setSubMenuActive(true);
    } else if (!menuOpened && subMenuActive) {
      setSubMenuActive(false);
    }
  }, [haveActiveSubMenu, menuOpened, subMenuActive]);

  return (
    <div
      key={menuItem.name}
      style={{
        position: 'relative',
      }}
      onMouseEnter={handleItemHover}
      onMouseLeave={handleItemBlur}
    >
      <MenuItemWrapper to={menuItem.to[0].path}>
        {menuItem.notice !== false ? (
          <CountMarker
            count={menuItem.notice}
            offset={[menuItem.notice >= 10 ? -8 : -2, 4]}
            overflowCount={99}
          >
            <IconContainer>
              <Icon
                style={{
                  color: isActive
                    ? theme.COLORS.ACCENT.PRIMARY
                    : theme.COLORS.TEXT.COMMON_TEXT,
                  fontSize: 18,
                  transition: 'color .3s ease-out',
                }}
              />
            </IconContainer>
          </CountMarker>
        ) : (
          <IconContainer>
            <Icon
              style={{
                color: isActive
                  ? theme.COLORS.ACCENT.PRIMARY
                  : theme.COLORS.TEXT.COMMON_TEXT,
                fontSize: 18,
                transition: 'color .3s ease-out',
              }}
            />
          </IconContainer>
        )}
        <MenuItemName active={isActive}>{menuItem.name}</MenuItemName>
        {menuItem.subMenu && (
          <ArrowDown
            style={{
              marginLeft: 'auto',
            }}
          />
        )}
      </MenuItemWrapper>
      {menuItem.subMenu && (
        <SubMenuWrapper active={subMenuActive} count={menuItem.subMenu.length}>
          {menuItem.subMenu.map((item) => (
            <SubMenuItem
              key={item.to}
              to={item.to}
              active={
                String(location.pathname.indexOf(item.to) > -1) as
                  | 'true'
                  | 'false'
              }
            >
              {item.name}
            </SubMenuItem>
          ))}
        </SubMenuWrapper>
      )}
    </div>
  );
};
