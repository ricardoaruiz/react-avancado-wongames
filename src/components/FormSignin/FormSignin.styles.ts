import styled, { css } from 'styled-components'

export const ForgotPassword = styled.div`
  ${({ theme }) => css`
    & a {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      text-align: right;
      text-decoration: none;
      color: ${theme.colors.black};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `};
`
