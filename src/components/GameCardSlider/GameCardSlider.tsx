import React from 'react'
import { NavigateNext, NavigateBefore } from '@styled-icons/material'

import * as S from './GameCardSlider.styles'

import { GameCard, GameCardProps, Slider, SliderSettings } from 'components'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'black' | 'white'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  dots: false,
  nextArrow: <NavigateNext size={24} aria-label="next games" />,
  prevArrow: <NavigateBefore size={24} aria-label="previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        arrows: false
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1.2,
        arrows: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1.1,
        arrows: false
      }
    }
  ]
}

export const GameCardSlider = ({
  items,
  color = 'black'
}: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((gameCardProps) => (
          <GameCard key={gameCardProps.title} {...gameCardProps} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider
