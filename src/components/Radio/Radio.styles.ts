import styled, { css } from 'styled-components'
import { RadioProps } from './Radio'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: background border ${theme.transition.fast};

    &::before {
      content: '';
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
      opacity: 0;
      transition: opacity ${theme.transition.fast};
    }

    &:checked {
      border: 0.2rem solid ${theme.colors.primary};
      &::before {
        opacity: 1;
      }
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `};
`

type LabelProps = Pick<RadioProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    padding-left: 1rem;
    color: ${theme.colors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `};
`
