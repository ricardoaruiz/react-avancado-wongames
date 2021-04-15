import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { GameCardSliderProps } from './GameCardSlider'
import * as GameCardStyles from 'components/GameCard/GameCard.styles'

type WrapperProps = Pick<GameCardSliderProps, 'color'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;

      ${GameCardStyles.Wrapper} {
        height: 100%;
      }
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    /* Next and Previous buttons  */
    .slick-prev,
    .slick-next {
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      color: ${theme.colors[color!]};
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `};
`
