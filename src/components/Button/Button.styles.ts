import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from './Button'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiers = {
  sizes: {
    small: (theme: DefaultTheme) => css`
      height: 3rem;
      font-size: ${theme.font.sizes.xsmall};

      & svg {
        width: ${theme.font.sizes.small};
      }
    `,
    medium: (theme: DefaultTheme) => css`
      height: 4rem;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

      & svg {
        width: ${theme.font.sizes.large};
      }
    `,
    large: (theme: DefaultTheme) => css`
      height: 5rem;
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

      & svg {
        width: ${theme.font.sizes.xlarge};
      }
    `,
    fullWidth: () => css`
      width: 100%;
    `
  }
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.white};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};
    outline: none;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%),
        linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    }

    & svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    /* Modifiers */
    ${!!size && wrapperModifiers.sizes[size](theme)}
    ${fullWidth && wrapperModifiers.sizes.fullWidth()};
  `}
`
