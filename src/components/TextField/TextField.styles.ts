import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
    cursor: pointer;
  `};
`

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: inherit;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `};
`

export const Input = styled.input`
  ${({ theme }) => css`
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
