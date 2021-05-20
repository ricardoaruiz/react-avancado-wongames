import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as GameItemStyles from 'components/GameItem/GameItem.styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-left: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.medium};
    }
    ${GameItemStyles.Wrapper}:last-of-type {
      border-bottom: unset;
    }
  `};
`
