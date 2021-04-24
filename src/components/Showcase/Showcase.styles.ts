import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as HighlightStyles from 'components/Highlight/Highlight.styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/GameCardSlider.styles'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper},
    ${HighlightStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
  `};
`

export const SectionHighlight = styled.section`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      margin-left: calc(-${theme.grid.gutter} / 2);
      margin-right: calc(-${theme.grid.gutter} / 2);        
    `}
  `}
`
