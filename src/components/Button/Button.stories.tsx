import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      type: 'select',
      options: ['small', 'medium', 'large']
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'By now',
  size: 'medium'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  children: 'By now',
  size: 'small',
  icon: <AddShoppingCart />
}

export const Minimal: Story<ButtonProps> = (args) => <Button {...args} />

Minimal.args = {
  children: 'By now',
  size: 'small',
  icon: <AddShoppingCart />,
  minimal: true
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  children: 'By now',
  size: 'large',
  as: 'a',
  href: '/link'
}
