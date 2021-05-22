import React from 'react'

import { Button, Checkbox, Heading, Radio } from 'components'

import * as S from './ExploreSidebar.styles'

export const ExploreSidebar = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="secondary" size="small" color="white">
        Price
      </Heading>
      <Checkbox name="under-50" label="Under $50" labelFor="under-50" />
      <Checkbox name="under-100" label="Under $100" labelFor="under-100" />
      <Checkbox name="under-150" label="Under $150" labelFor="under-150" />
      <Checkbox name="under-200" label="Under $200" labelFor="under-200" />
      <Checkbox name="free" label="Free" labelFor="free" />
      <Checkbox name="discounted" label="Disctounted" labelFor="discounted" />

      <Heading lineBottom lineColor="secondary" size="small" color="white">
        Sort by
      </Heading>
      <Radio
        label="High to low"
        labelFor="highToLow"
        value="HTL"
        name="sortby"
      />
      <Radio
        label="Low to high"
        labelFor="lowToHigh"
        value="LTH"
        name="sortby"
      />

      <Heading lineBottom lineColor="secondary" size="small" color="white">
        System
      </Heading>
      <Checkbox name="windows" label="Windows" labelFor="windows" />
      <Checkbox name="linux" label="Linux" labelFor="linux" />
      <Checkbox name="mac" label="MAC" labelFor="mac" />

      <Heading lineBottom lineColor="secondary" size="small" color="white">
        Genre
      </Heading>
      <Checkbox name="action" label="Action" labelFor="action" />
      <Checkbox name="adventure" label="Adventure" labelFor="adventure" />
      <Checkbox name="fps" label="FPS" labelFor="fps" />
      <Checkbox name="mmorpg" label="MMORPG" labelFor="mmorpg" />

      <Button size="medium" fullWidth>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
