import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'
import * as GameDetailsStyles from 'components/GameDetails/GameDetails.styles'
import * as ShowCaseStyles from 'components/Showcase/Showcase.styles'

export const Main = styled.main`
  margin-top: 20rem;

  ${media.greaterThan('medium')`
      margin-top: 25rem;
    `}
`

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 39.5rem;

    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      height: 50rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `};
`
export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)``

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    & .description__copyrights {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.medium};
    }
  `};
`
export const SectionDetails = styled(Section)`
  ${({ theme }) => css`
    ${GameDetailsStyles.Wrapper} {
      border-bottom: 1px solid rgba(181, 181, 181, 0.3);
      padding-bottom: ${theme.spacings.xlarge};

      ${media.greaterThan('medium')`
        padding-bottom: calc(${theme.spacings.xlarge} * 2);
      `}
    }
  `};
`
export const SectionUpcoming = styled(Section)`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      ${ShowCaseStyles.SectionHighlight} {
        margin-left: -${theme.grid.gutter};
        margin-right: -${theme.grid.gutter};
      }    
    `}
  `};
`
export const SectionRecommended = styled(Section)``
