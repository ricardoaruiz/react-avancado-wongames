import React from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './Slider.styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <S.Wrapper>
      <SlickSlider {...settings} ref={ref}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

const SliderRef = React.forwardRef(Slider)

export { SliderRef as Slider }
export default SliderRef
