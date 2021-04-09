import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      defaultValue: 'black',
      control: {
        type: 'select',
        options: ['black', 'white']
      }
    }
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

Basic.args = {
  children: 'Most Populars'
}
