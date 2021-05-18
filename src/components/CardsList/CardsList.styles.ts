import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `};
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};

    &:first-of-type {
      margin-top: ${theme.spacings.medium};
    }

    & + div {
      margin-top: ${theme.spacings.xxsmall};
    }
  `};
`

export const CardImage = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
  `};
`

export const CardNumber = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `};
`
