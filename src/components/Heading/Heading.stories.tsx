import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium']
      }
    },
    color: {
      defaultValue: 'black',
      control: {
        type: 'select',
        options: ['black', 'white']
      }
    },
    lineColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    }
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

Basic.args = {
  children: 'Most Populars'
}
