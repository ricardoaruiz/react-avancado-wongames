import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from './TextField'

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
    cursor: pointer;
  `};
`
type WrapperInputProps = Pick<TextFieldProps, 'iconPosition'>

const wrapperInputMofiers = {
  iconPosition: {
    left: (theme: DefaultTheme) => css`
      ${Input} {
        order: 1;
      }
      ${Icon} {
        order: 0;
        margin-right: ${theme.spacings.xxsmall};
      }
    `,
    right: (theme: DefaultTheme) => css`
      ${Input} {
        order: 0;
      }
      ${Icon} {
        order: 1;
        margin-left: ${theme.spacings.xsmall};
      }
    `
  }
}

export const WrapperInput = styled.div<WrapperInputProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${wrapperInputMofiers.iconPosition[iconPosition!](theme)};
  `};
`

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    width: inherit;
    height: 100%;
    border: none;
    outline: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background-color: transparent;
    padding: ${theme.spacings.xxsmall} 0;
  `};
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.gray};

    & svg {
      width: 2.2rem;
    }
  `};
`

export const Error = styled.small`
  ${({ theme }) => css`
    display: block;
    margin-top: 0.2rem;
    font-size: 1rem;
    color: ${theme.colors.primary};
  `};
`

type WrapperProps = Pick<TextFieldProps, 'disabled'> & {
  hasError: boolean
}

const wrapperModifier = {
  disabled: (theme: DefaultTheme) => css`
    ${Input},
    ${Label} {
      color: ${theme.colors.gray};
      cursor: default;
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${Label},
    ${Icon} {
      color: ${theme.colors.primary};
    }
    ${WrapperInput} {
      border: 1px solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, hasError }) => css`
    ${disabled && wrapperModifier.disabled(theme)};
    ${hasError && wrapperModifier.error(theme)};
  `};
`
