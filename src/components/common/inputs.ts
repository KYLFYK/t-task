import styled from "@emotion/styled";
import { Input as AntInput } from "antd";

export const Input = styled(AntInput)`
  color: ${(props) => props.theme.COLORS.TEXT.COMMON_TEXT};
  background-color: ${(props) => props.theme.COLORS.WHITE.C400};
  border-color: ${(props) => props.theme.COLORS.WHITE.C400};
  transition: background-color 0.3s ease-out, border-color 0.3s ease-out;

  :hover {
    border-color: ${(props) => props.theme.COLORS.ACCENT.PRIMARY};
  }

  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    background: ${(props) => props.theme.COLORS.WHITE.C400};
  }

  &.ant-input-affix-wrapper-focused {
    border-color: ${(props) => props.theme.COLORS.ACCENT.PRIMARY};
  }

  input {
    color: ${(props) => props.theme.COLORS.TEXT.COMMON_TEXT};
    background-color: ${(props) => props.theme.COLORS.WHITE.C400};
    transition: background-color 0.3s ease-out, border-color 0.3s ease-out;

    &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
    &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
      background: ${(props) => props.theme.COLORS.WHITE.C400};
    }
  }
`;
