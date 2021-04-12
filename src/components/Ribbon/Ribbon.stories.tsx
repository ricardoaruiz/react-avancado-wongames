import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from './Ribbon'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Sellert'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    size: {
      defaultValue: 'normal',
      control: {
        type: 'select',
        options: ['small', 'normal']
      }
    }
  }
} as Meta

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
