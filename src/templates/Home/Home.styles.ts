import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/GameCardSlider.styles'

export const SectionHeader = styled(Container)`
  ${media.greaterThan('large')`
      height: 480px;
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `};
`

export const SectionNews = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;

    ${HeadingStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.medium};
      color: ${theme.colors.white};
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${media.greaterThan('large')`
      background-color: ${theme.colors.white};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      padding: 100px 0;

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `};
`
