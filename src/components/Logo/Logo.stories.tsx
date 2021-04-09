import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from './Logo'

import { LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      name: 'Color',
      description: 'Text logo color',
      defaultValue: 'black',
      control: {
        type: 'select',
        options: ['white', 'black']
      }
    }
  }
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
