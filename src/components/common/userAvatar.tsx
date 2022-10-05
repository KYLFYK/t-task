import React, { FC } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled('div')<{ source: string }>`
  background-image: url('${(props) => props.source}');
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const ImageText = styled('div')`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: ${({ theme }) => theme.COLORS.WHITE.C400};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.TEXT.SECONDARY};
`;

interface Props {
  source: string;
  size: number;
  type?: 'file' | 'text';
}

export const UserAvatar: FC<Props> = ({ source, size, type }) => {
  return (
    <Wrapper size={size}>
      {type === 'text' ? (
        <ImageText>{source.slice(0, 3)}</ImageText>
      ) : (
        <Image source={source} />
      )}
    </Wrapper>
  );
};
