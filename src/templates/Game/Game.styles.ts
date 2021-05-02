import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'

export const Main = styled.main`
  margin-top: 20rem;

  ${media.greaterThan('medium')`
      margin-top: 38rem;
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
