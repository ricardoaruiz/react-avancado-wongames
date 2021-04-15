import React from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './Slider.styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const Slider = ({ children, settings }: SliderProps) => {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  )
}

export default Slider
