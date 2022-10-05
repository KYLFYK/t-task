import React, { FC } from 'react';
import { BaseIconProps, IconBaseContainer } from './index';
import { Colors, ColorsDark } from '../../styles';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';

const Path = styled('path')<{ strokeColor?: Colors | ColorsDark | string }>`
  stroke: ${(props) =>
    props.strokeColor
      ? props.strokeColor
      : props.theme.COLORS.TEXT.COMMON_TEXT};
  transition: stroke 0.3s ease-out;
`;

export const ArrowDownClear: FC<BaseIconProps> = ({ size, fill, style }) => {
  return (
    <IconBaseContainer width={size} height={size} style={style}>
      <svg
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 1L4 3L7 1"
          strokeColor={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBaseContainer>
  );
};

export const ArrowDown = withTheme(ArrowDownClear);
