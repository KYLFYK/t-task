import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Colors, ColorsDark } from "../../styles";
import { CSSProperties } from "react";

export const IconBaseContainer = styled("div")`
  ${(props: { width?: number; height?: number }) => {
    return css`
      width: ${props.width ? props.width : 20}px;
      height: ${props.height ? props.height : 20}px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

export interface BaseIconProps {
  size?: number;
  fill?: Colors | ColorsDark | string;
  style?: CSSProperties;
}
