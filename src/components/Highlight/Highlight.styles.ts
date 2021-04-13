import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from './Highlight'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage }) => css`
    position: relative;
    display: grid;
    width: 100%;
    height: 23rem;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `};
`

type ContentProps = Pick<HighlightProps, 'textAlign'>

const contentModifiers = {
  align: {
    left: () => css`
      text-align: left;

      & ${FloatImage} {
        right: 0;
      }
    `,
    right: () => css`
      text-align: right;

      & ${FloatImage} {
        left: 0;
      }
    `
  }
}

export const Content = styled.div<ContentProps>`
  ${({ theme, textAlign }) => css`
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};

    ${contentModifiers.align[textAlign!]}

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `};
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `};
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `};
`

type FloatImageProps = {
  img: string
}

export const FloatImage = styled.div<FloatImageProps>`
  ${({ theme, img }) => css`
    position: absolute;
    width: 13.5rem;
    height: 15.7rem;

    background-image: url(${img});
    background-position: center center;
    background-size: cover;

    z-index: ${theme.layers.base};
    bottom: 0;

    ${media.greaterThan('medium')`
      width: 26.6rem;
      height: 31rem;
    `}
  `};
`
