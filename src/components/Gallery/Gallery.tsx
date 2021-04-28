import React from 'react'
import { NavigateNext, NavigateBefore } from '@styled-icons/material'

import * as S from './Gallery.styles'

import { Slider, SliderSettings } from 'components'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  dots: false,
  nextArrow: <NavigateNext size={24} aria-label="next image" />,
  prevArrow: <NavigateBefore size={24} aria-label="previous image" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        arrows: false,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.2,
        arrows: false,
        draggable: true
      }
    }
  ]
}

export const Gallery = ({ items }: GalleryProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map(({ src, label }) => (
          <img role="button" key={src} src={src} alt={`Thumb-${label}`} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Gallery
