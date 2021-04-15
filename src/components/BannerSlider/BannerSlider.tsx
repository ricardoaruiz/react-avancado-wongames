import React from 'react'

import { Slider, SliderSettings, Banner, BannerProps } from 'components'

import * as S from './BannerSlider.styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  arrows: false,
  dots: true,
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
