import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

import { HeadingLineColor, HeadingProps } from './Heading'

type WrapperProps = Omit<HeadingProps, 'children'>

const wrapperModifiers = {
  sizes: {
    small: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.medium};

      &::after {
        width: 3rem;
        bottom: -0.5rem;
      }
    `,
    medium: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.xlarge};

      ${media.greaterThan('medium')`
       font-size: ${theme.font.sizes.xxlarge};
      `}
    `,
    hudge: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.hudge};
    `
  },
  lineLeft: (theme: DefaultTheme, lineColor: HeadingLineColor) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor!]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: HeadingLineColor) => css`
    position: relative;

    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor!]};
    }
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size, color, lineLeft, lineBottom, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)};
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)};
    ${wrapperModifiers.sizes[size!](theme)};
  `}
`
