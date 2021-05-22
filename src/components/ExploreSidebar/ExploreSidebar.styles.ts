import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.small};
    }
  `};
`
