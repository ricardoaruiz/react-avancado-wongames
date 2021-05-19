import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ProfileMenuStyles from 'components/ProfileMenu/ProfileMenu.styles'

export const Main = styled.main`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacings.small};

    ${ProfileMenuStyles.Nav} {
      align-self: start;
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 2fr;
      gap: 7.7rem;
      margin-top: ${theme.spacings.xxlarge};
    `}
  `};
`

export const Content = styled.div``
