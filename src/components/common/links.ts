import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const BaseLink = styled(NavLink)`
  :hover {
    color: ${({ theme }) => theme.COLORS.WHITE.C100};
  }
`;

export const AdditionalLink = styled(NavLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT.DISABLED};

  :hover {
    color: ${({ theme }) => theme.COLORS.ACCENT.PRIMARY};
  }
`;
