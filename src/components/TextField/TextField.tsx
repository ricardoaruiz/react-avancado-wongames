import React, { InputHTMLAttributes } from 'react'

import * as S from './TextField.styles'

export type TextFieldIconPositions = 'left' | 'right'

export type TextFieldProps = {
  label?: string
  placeholder?: string
  value?: string
  icon?: React.ReactNode
  iconPosition?: TextFieldIconPositions
  disabled?: boolean
  error?: string
  onValueChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  label,
  name,
  placeholder,
  value = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  error = '',
  onValueChange,
  ...props
}: TextFieldProps) => {
  const [inputValue, setInputValue] = React.useState(value)

  const onValueChangeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      setInputValue(value)
      !!onValueChange && onValueChange(value)
    },
    [onValueChange]
  )

  return (
    <S.Wrapper disabled={disabled} hasError={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.WrapperInput iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}

        <S.Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={onValueChangeHandler}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.WrapperInput>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
