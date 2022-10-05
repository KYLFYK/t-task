import React, { FC, PropsWithChildren } from 'react';
import { Badge } from 'antd';
import styled from '@emotion/styled';

const Marker = styled(Badge)`
  color: ${({ theme }) => theme.COLORS.ACCENT.DANGER};

  sup {
    box-shadow: none;
  }
`;

export const CountMarker: FC<
  PropsWithChildren<{
    count: number;
    offset?: [number, number];
    overflowCount?: number;
  }>
> = ({ children, count, offset, overflowCount }) => {
  return (
    <Marker offset={offset} count={count} overflowCount={overflowCount}>
      {children}
    </Marker>
  );
};
