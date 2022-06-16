import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ bg }) => css`
    background-color: ${bg ? bg : 'none'};
  `}
`;
