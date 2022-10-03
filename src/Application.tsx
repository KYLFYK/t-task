import React, { FC } from 'react';
import { useAppDispatch } from './ducks';
import { setApplicationIsInit } from './ducks/application/actions';
import { doSomething } from './ducks/application/reducer';
import styled from '@emotion/styled';

const H1 = styled('div')`
  color: #333333;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Application: FC = () => {
  const dispatch = useAppDispatch();

  dispatch(setApplicationIsInit(false));
  dispatch(doSomething(true));

  return (
    <div>
      <H1>Hello world!</H1>
    </div>
  );
};
