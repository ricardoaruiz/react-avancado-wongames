import React from 'react'
import * as S from './Checkbox.styles'

export type CheckboxLabelColors = 'white' | 'black'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: CheckboxLabelColors
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => {
  return (
    <S.Wrapper>
      <S.Input type="checkbox" id={labelFor} />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
