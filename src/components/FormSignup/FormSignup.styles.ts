import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from 'components/TextField/TextField.styles'
import * as ButtonStyles from 'components/Button/Button.styles'

export const Form = styled.form`
  ${TextFieldStyles.Wrapper} {
    margin-bottom: 1rem;
  }

  ${ButtonStyles.Wrapper} {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
`

export const Disclamer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;

    & a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.secondary};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `};
`
