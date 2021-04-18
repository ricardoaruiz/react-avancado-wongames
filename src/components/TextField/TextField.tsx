import React, { InputHTMLAttributes } from 'react'
import * as S from './TextField.styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  label,
  labelFor,
  placeholder,
  value = '',
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
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.WrapperInput>
        <S.Input
          type="text"
          id={labelFor}
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeHandler}
          {...props}
        />
      </S.WrapperInput>
    </S.Wrapper>
  )
}

export default TextField
