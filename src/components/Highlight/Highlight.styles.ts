import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from './Highlight'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'textAlign'>

const wrapperModifiers = {
  align: {
    left: () => css`
      grid-template-areas: 'content floatimage';
      grid-template-columns: 2fr 1.3fr;

      ${Content} {
        text-align: left;
      }

      ${FloatImage} {
        justify-self: end;
      }
    `,
    right: () => css`
      grid-template-areas: 'floatimage content';
      grid-template-columns: 1.3fr 2fr;

      ${Content} {
        text-align: right;
      }

      ${FloatImage} {
        justify-self: start;
      }
    `
  }
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, textAlign }) => css`
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

    ${wrapperModifiers.align[textAlign!]};
  `};
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    align-self: end;
    max-width: 100%;
    max-height: 23rem;

    z-index: ${theme.layers.base};
    bottom: 0;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `};
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};

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
