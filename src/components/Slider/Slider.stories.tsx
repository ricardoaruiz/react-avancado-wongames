import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import Slider from './Slider'

import { SliderProps } from './Slider'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)

Horizontal.args = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
}

export const Vertical: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)

Vertical.args = {
  settings: {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true
  }
}
