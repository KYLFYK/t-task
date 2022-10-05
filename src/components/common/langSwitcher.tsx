import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ArrowDown } from '../icons/ArrowDown';
import { ZIndex } from '../../styles/z-index';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { useAppDispatch } from '../../ducks';
import { useLocaleSelector } from '../../ducks/application/selectors';
import {
  LangType,
  setLang,
} from '../../ducks/application/services/localeSlice';

const Wrapper = styled('div')`
  position: relative;
`;

const CurrentLangWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.COLORS.TEXT.COMMON_TEXT};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.COLORS.WHITE.C400};
  padding-left: 10px;
  padding-right: 6px;
  height: 24px;
  border-radius: 17px;
  user-select: none;
  cursor: pointer;
  z-index: ${ZIndex.Z1};
  position: relative;
  width: 60px;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
`;

const LangPopup = styled('div')<{
  opened: boolean;
  length: number;
}>`
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  overflow: hidden;
  height: ${(props) => (props.opened ? `${props.length * 20 + 28 - 2}px` : 0)};
  background-color: ${(props) => props.theme.COLORS.WHITE.C400};
  z-index: ${ZIndex.Z0};
  padding-bottom: 10px;
  padding-top: 18px;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  opacity: ${(props) => (props.opened ? 1 : 0)};
  transition: height 0.3s ease-out, opacity 0.3s ease-out,
    background-color 0.3s ease-out;
  pointer-events: ${(props) => (props.opened ? 'unset' : 'none')};
  display: flex;
  flex-direction: column;
  line-height: 18px;
  gap: 2px;
  text-transform: uppercase;
`;

const PopupItem = styled('span')<{ active: boolean }>`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 6px;
  color: ${(props) =>
    props.active
      ? props.theme.COLORS.ACCENT.PRIMARY
      : props.theme.COLORS.TEXT.COMMON_TEXT};
  transition: color 0.3s ease-out, background-color 0.3s ease-out;

  :hover {
    background-color: ${(props) => props.theme.COLORS.WHITE.C200};
  }
`;

export const LangSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const locale = useLocaleSelector();
  const theme = useCurrentTheme();

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [opened, setOpened] = useState(false);

  const handleCurrentLangClick = useCallback(() => {
    setOpened((prev) => !prev);
  }, []);

  const handleSelectLang = useCallback(
    (lang: LangType) => {
      dispatch(setLang(lang));
      setOpened(false);
    },
    [dispatch]
  );

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpened(false);
      }
    };

    document.addEventListener('click', clickListener);

    return () => document.removeEventListener('click', clickListener);
  }, [wrapperRef]);

  return (
    <Wrapper ref={wrapperRef}>
      <CurrentLangWrapper onClick={handleCurrentLangClick}>
        <span>{locale.lang}</span>
        <ArrowDown fill={theme.COLORS.TEXT.COMMON_TEXT} />
      </CurrentLangWrapper>
      <LangPopup length={locale.variants.length} opened={opened}>
        {locale.variants.map((lang) => (
          <PopupItem
            key={lang}
            active={lang === locale.lang}
            onClick={() => {
              handleSelectLang(lang);
            }}
          >
            {lang}
          </PopupItem>
        ))}
      </LangPopup>
    </Wrapper>
  );
};
