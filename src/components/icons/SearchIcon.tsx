import React, { FC } from 'react';
import { BaseIconProps, IconBaseContainer } from './index';
import { Colors, ColorsDark } from '../../styles';
import styled from '@emotion/styled';

const Path = styled('path')<{ fillColor?: Colors | ColorsDark | string }>`
  fill: ${(props) =>
    props.fillColor ? props.fillColor : props.theme.COLORS.TEXT.COMMON_TEXT};
  transition: fill 0.3s ease-out;
`;

export const SearchIcon: FC<BaseIconProps> = ({ size, fill, style }) => {
  return (
    <IconBaseContainer width={size} height={size} style={style}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M8.65625 14.7188C5.3125 14.7188 2.5625 12 2.5625 8.625C2.5625 5.28125 5.28125 2.53125 8.65625 2.53125C12.0312 2.53125 14.75 5.25 14.75 8.625C14.7188 12 12 14.7188 8.65625 14.7188ZM8.65625 3.4375C5.78125 3.4375 3.4375 5.78125 3.4375 8.65625C3.4375 11.5312 5.78125 13.875 8.65625 13.875C11.5312 13.875 13.875 11.5312 13.875 8.65625C13.8437 5.78125 11.5 3.4375 8.65625 3.4375Z"
          fillColor={fill}
        />
        <Path
          d="M16.7813 17.4375L12.5312 13.2187L13.2188 12.5312L17.4375 16.7812L16.7813 17.4375Z"
          fillColor={fill}
        />
      </svg>
    </IconBaseContainer>
  );
};
