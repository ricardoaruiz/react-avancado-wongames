import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`
export const Badge = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.spacings.xsmall};
    height: ${theme.spacings.xsmall};
    border-radius: 50%;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${theme.colors.secondary};
    font-size: 0.8rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `};
`
