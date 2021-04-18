import React, { InputHTMLAttributes } from 'react'
import * as S from './Radio.styles'

export type RadioLabelColors = 'black' | 'white'
type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  labelFor?: string
  labelColor?: RadioLabelColors
  value?: RadioValue
  onCheck?: (value: RadioValue) => void
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  labelFor,
  labelColor = 'white',
  value,
  onCheck,
  ...props
}: RadioProps) => {
  const onChange = React.useCallback(() => {
    onCheck && onCheck(value!)
  }, [onCheck, value])

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={labelFor}
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
