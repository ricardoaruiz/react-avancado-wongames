import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from './Highlight'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    textAlign: {
      defaultValue: 'right',
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    }
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

Basic.args = {
  title: 'Read Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy now',
  buttonLink: 'https://wongames/red-dead',
  backgroundImage: '/img/red-dead-bg.jpg'
}

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  title: 'Read Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy now',
  buttonLink: 'https://wongames/red-dead',
  backgroundImage: '/img/red-dead-bg.jpg',
  floatImage: '/img/red-dead.png'
}
