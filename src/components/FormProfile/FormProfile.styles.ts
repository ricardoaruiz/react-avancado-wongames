import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `};
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacings.large};
    `}
  `};
`

export const Buttons = styled.div`
  margin-top: 7rem;

  ${media.greaterThan('medium')`
      justify-self: end;
      width: 20rem;
      grid-column: 2;
    `}
`
