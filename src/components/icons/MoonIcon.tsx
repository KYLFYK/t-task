import React, { FC } from 'react';
import { BaseIconProps, IconBaseContainer } from './index';
import { Colors, ColorsDark } from '../../styles';
import styled from '@emotion/styled';

const Path = styled('path')<{ stroke?: Colors | ColorsDark | string }>`
  stroke: ${(props) =>
    props.stroke ? props.stroke : props.theme.COLORS.TEXT.COMMON_TEXT};
  transition: stroke 0.3s ease-out;
`;

export const MoonIcon: FC<BaseIconProps> = ({ size, fill, style }) => {
  return (
    <IconBaseContainer width={size} height={size} style={style}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M8.08999 9.04438C5.88812 9.04438 4.10312 7.25938 4.10312 5.0575C4.10312 3.3875 5.12937 1.9575 6.58624 1.36375C6.49874 1.35875 6.41062 1.35625 6.32249 1.35625C3.75749 1.35625 1.67874 3.43563 1.67874 6C1.67874 8.56438 3.75812 10.6444 6.32249 10.6444C8.02499 10.6444 9.51374 9.72813 10.3225 8.36188C9.68499 8.7925 8.91687 9.04438 8.08999 9.04438Z"
          stroke={fill}
          strokeWidth="0.35"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconBaseContainer>
  );
};
