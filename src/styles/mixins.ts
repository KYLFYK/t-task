import styled, { StyledComponent } from '@emotion/styled';
import { FC } from 'react';

interface MixinSettings<T> {
  target: FC<T>;
}

export const BlockShadow: <T extends {}>(
  props: MixinSettings<T>
) => StyledComponent<T> = ({ target }) => {
  return styled(target)`
    box-shadow: 0px -7px 48px rgba(29, 46, 78, 0.03),
      0px -0.876509px 6.01034px rgba(29, 46, 78, 0.015);
  `;
};
