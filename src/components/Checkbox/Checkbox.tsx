import React, { InputHTMLAttributes } from 'react'
import * as S from './Checkbox.styles'

export type CheckboxLabelColors = 'white' | 'black'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: CheckboxLabelColors
  isChecked?: boolean
  onCheck?: (value: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  isChecked = false,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = React.useState(isChecked)

  const onChange = React.useCallback(() => {
    setChecked(!checked)
    !!onCheck && onCheck(!checked)
  }, [checked, onCheck])

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
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

export default Checkbox
