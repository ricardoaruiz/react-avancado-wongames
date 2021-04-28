import React from 'react'
import { NavigateNext, NavigateBefore } from '@styled-icons/material'
import { Close } from '@styled-icons/material-outlined/Close'
import SlickSlider from 'react-slick'

import { Slider, SliderSettings } from 'components'

import * as S from './Gallery.styles'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  dots: false,
  nextArrow: <NavigateNext size={24} aria-label="next image" />,
  prevArrow: <NavigateBefore size={24} aria-label="previous image" />
}

const settings: SliderSettings = {
  slidesToShow: 4,
  ...commonSettings,
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

const modalSettings: SliderSettings = {
  slidesToShow: 1,
  ...commonSettings
}

export const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const sliderRef = React.useRef<SlickSlider>(null)

  React.useEffect(() => {
    const onKeyupListener = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', onKeyupListener)
    return () => window.removeEventListener('keyup', onKeyupListener)
  }, [])

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map(({ src, label }, index) => (
          <img
            role="button"
            key={`Thumb - ${label} ${index}`}
            src={src}
            alt={`Thumb - ${label} ${index}`}
            onClick={() => {
              setIsOpen(true)
              sliderRef.current?.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal aria-hidden={!isOpen} aria-label="modal" isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <Close size={40} />
        </S.Close>

        <S.ModalContent>
          <Slider settings={modalSettings} ref={sliderRef}>
            {items.map(({ src, label }, index) => (
              <img
                key={`Gallery - ${index}`}
                src={src}
                alt={`${label} ${index}`}
              />
            ))}
          </Slider>
        </S.ModalContent>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
