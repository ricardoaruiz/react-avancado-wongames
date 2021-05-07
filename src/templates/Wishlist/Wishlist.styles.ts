import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'

import * as CamecardSlideStyles from 'components/GameCardSlider/GameCardSlider.styles'

export const WishGamesSection = styled(Container)`
  ${({ theme }) => css`
    ${CamecardSlideStyles.Wrapper} {
      padding-bottom: ${theme.spacings.xlarge};
      border-bottom: 1px solid rgba(181, 181, 181, 0.3);
    }

    ${media.greaterThan('medium')`
        ${CamecardSlideStyles.Wrapper} {
            padding-bottom: 16.2rem;
            margin-bottom: 7.4rem;
        }
    `}
  `};
`
