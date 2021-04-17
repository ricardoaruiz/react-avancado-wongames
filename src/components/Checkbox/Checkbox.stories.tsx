import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    labelColor: {
      defaultValue: 'white',
      control: {
        type: 'select',
        options: ['black', 'white']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />

Basic.args = {
  label: 'Checkbox',
  labelFor: 'action'
}
