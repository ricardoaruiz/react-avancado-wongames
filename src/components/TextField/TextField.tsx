import React, { InputHTMLAttributes } from 'react'

import * as S from './TextField.styles'

export type TextFieldIconPositions = 'left' | 'right'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  placeholder?: string
  value?: string
  icon?: React.ReactNode
  iconPosition?: TextFieldIconPositions
  disabled?: boolean
  error?: string
  onChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  label,
  labelFor,
  placeholder,
  value = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  error = '',
  onChange,
  ...props
}: TextFieldProps) => {
  const [inputValue, setInputValue] = React.useState(value)

  const onChangeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      setInputValue(value)
      !!onChange && onChange(value)
    },
    [onChange]
  )

  return (
    <S.Wrapper disabled={disabled} hasError={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.WrapperInput iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}

        <S.Input
          type="text"
          id={labelFor}
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeHandler}
          disabled={disabled}
          {...props}
        />
      </S.WrapperInput>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField