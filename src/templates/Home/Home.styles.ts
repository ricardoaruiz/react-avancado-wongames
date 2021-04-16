import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'
import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Wrapper = styled.main``

export const SectionHeader = styled(Container)`
  ${media.greaterThan('medium')`
      height: 600px;
    `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      position: relative;
      margin: ${theme.spacings.large} 0;
      z-index: ${theme.layers.base};
    `}
  `};
`
export const SectionNews = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
      color: ${theme.colors.white};
    }

    ${media.greaterThan('medium')`
      background-color: ${theme.colors.white};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      padding: 100px 0;

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }

    `}
  `};
`

export const SectionMostPopular = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `};
`

export const SectionMostPopularHighlight = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${HeadingStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
    `}
  `};
`

export const SectionUpcoming = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `};
`

export const SectionUpcomingGames = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
    `}
  `};
`

export const SectionFreeGames = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `};
`

export const SectionFreeGamesHighlight = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${HeadingStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
    `}
  `};
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
    padding-bottom: 5rem;

    ${Container} {
      padding-top: 50px;
    }
  `};
`
