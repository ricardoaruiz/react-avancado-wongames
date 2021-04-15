import { Story, Meta } from '@storybook/react/types-6-0'

import GameCardSlider, { GameCardSliderProps } from './GameCardSlider'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  argTypes: {
    color: {
      defaultValue: 'black',
      control: {
        type: 'select',
        options: ['black', 'white']
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)

Basic.args = {
  color: 'white',
  items: [
    {
      image: '/img/red-dead-card.png',
      title:
        'Read dead Redemption II  fdg dfogjdg jdpgodg psjg spdgjspgjs pgsj gps jgpsd gjspg',
      developer: 'Rockstar Games',
      normalPrice: 235,
      promotionPrice: 215,
      withBorderRadius: false
    },
    {
      image: 'https://source.unsplash.com/user/willianjusten/1042x588',
      title: 'Read dead Redemption II',
      developer: 'Rockstar Games',
      normalPrice: 235,
      promotionPrice: 215,
      ribbonText: '20% off',
      withBorderRadius: false
    },
    {
      image: 'https://source.unsplash.com/user/willianjusten/1042x588',
      title: 'Read dead Redemption II',
      developer: 'Rockstar Games',
      normalPrice: 235,
      promotionPrice: 215,
      ribbonText: '20% off',
      withBorderRadius: false
    },
    {
      image: 'https://source.unsplash.com/user/willianjusten/1042x588',
      title: 'Read dead Redemption II',
      developer: 'Rockstar Games',
      normalPrice: 235,
      promotionPrice: 215,
      ribbonText: '20% off',
      withBorderRadius: false
    },
    {
      image: 'https://source.unsplash.com/user/willianjusten/1042x588',
      title: 'Read dead Redemption II',
      developer: 'Rockstar Games',
      normalPrice: 235,
      promotionPrice: 215,
      ribbonText: '20% off',
      withBorderRadius: false
    }
  ]
}
