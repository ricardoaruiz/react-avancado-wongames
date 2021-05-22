import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as GameItemStyles from 'components/GameItem/GameItem.styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.xsmall};
    }
    ${GameItemStyles.Wrapper}:last-of-type {
      border-bottom: unset;
    }
  `};
`
