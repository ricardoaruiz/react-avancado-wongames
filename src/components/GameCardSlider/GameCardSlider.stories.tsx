import { Story, Meta } from '@storybook/react/types-6-0'

import GameCardSlider, { GameCardSliderProps } from './GameCardSlider'
import { items } from './mock'

export default {
  title: 'Game/GameCardSlider',
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
  items
}
