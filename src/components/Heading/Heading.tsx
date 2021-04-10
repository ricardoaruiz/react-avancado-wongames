import React from 'react'
import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Wrapper>
  )
}

export default Heading