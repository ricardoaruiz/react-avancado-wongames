import React from 'react'
import * as S from './Ribbon.styles'

export type RibbonColor = 'primary' | 'secondary'
export type RibbonSize = 'small' | 'normal'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColor
  size?: RibbonSize
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}

export default Ribbon
