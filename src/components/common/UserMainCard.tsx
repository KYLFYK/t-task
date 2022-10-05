import React, { FC } from 'react';
import styled from '@emotion/styled';
import { UserAvatar } from './userAvatar';
import { ArrowDown } from '../icons/ArrowDown';
import { Balance } from '../balance';

const Wrapper = styled('div')`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const InfoWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoInner = styled('div')`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: -3px;
`;

const Name = styled('span')`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT.COMMON_TEXT};
  transition: color 0.3s ease-out;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

const BalanceWrapper = styled('span')`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT.DISABLED};
  transition: color 0.3s ease-out;
`;

interface Props {
  account: string;
}

export const UserMainCard: FC<Props> = ({ account }) => {
  return (
    <Wrapper>
      <UserAvatar type={'text'} size={42} source={account} />
      <InfoWrapper>
        <InfoInner>
          <Name>{account}</Name>
          <BalanceWrapper>
            <Balance />
          </BalanceWrapper>
        </InfoInner>
        <ArrowDown />
      </InfoWrapper>
    </Wrapper>
  );
};
