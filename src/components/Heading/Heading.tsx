import React from 'react'
import * as S from './Heading.styles'

export type HeadingSize = 'small' | 'medium' | 'hudge'
export type HeadingLineColor = 'primary' | 'secondary'
export type HeadingColor = 'white' | 'black'

export type HeadingProps = {
  children: React.ReactNode
  size?: HeadingSize
  color?: HeadingColor
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: HeadingLineColor
}

export const Heading = ({
  children,
  size = 'medium',
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary'
}: HeadingProps) => {
  return (
    <S.Wrapper
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
    >
      {children}
    </S.Wrapper>
  )
}

export default Heading
