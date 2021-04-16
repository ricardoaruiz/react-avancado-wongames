import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from './Highlight'
import { basic, withFloatImage } from './mock'

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

Basic.args = { ...basic }

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = { ...withFloatImage }
