import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import { RibbonColor, RibbonProps } from './Ribbon'

type WrapperProps = Omit<RibbonProps, 'children'>

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColor) => css`
    background-color: ${theme.colors[color]};

    &::after {
      border-top-color: ${darken(0.2, theme.colors[color])};
      border-left-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  sizes: {
    normal: (theme: DefaultTheme) => css`
      height: ${theme.spacings.medium};
      padding: 0 ${theme.spacings.small};
      font-size: ${theme.font.sizes.small};
      right: -2rem;
      line-height: ${theme.spacings.small};

      &::after {
        top: ${theme.spacings.medium};
        border-top-width: 1rem;
        border-right-width: 2rem;
      }
    `,
    small: (theme: DefaultTheme) => css`
      height: ${theme.spacings.small};
      padding: 0 ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xsmall};
      right: -1.5rem;
      line-height: ${theme.spacings.xsmall};

      &::after {
        top: ${theme.spacings.small};
        border-top-width: 0.7rem;
        border-right-width: 1.5rem;
      }
    `
  }
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    &::after {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    /* Modifiers */
    ${wrapperModifiers.color(theme, color!)};
    ${wrapperModifiers.sizes[size!](theme)};
  `}
`
