import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { Email } from '@styled-icons/material-outlined/Email'

import TextField, { TextFieldProps } from './TextField'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    value: {
      type: 'string'
    },
    iconPosition: {
      defaultValue: 'left',
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    },
    icon: {
      type: ''
    },
    onChange: {
      action: 'change'
    }
  }
} as Meta

const Container = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`

export const Basic: Story<TextFieldProps> = (args) => (
  <Container>
    <TextField {...args} />
  </Container>
)

Basic.args = {
  label: 'Email',
  labelFor: 'email',
  placeholder: 'Email',
  value: ''
}

export const WithIcon: Story<TextFieldProps> = (args) => (
  <Container>
    <TextField {...args} />
  </Container>
)

WithIcon.args = {
  label: 'Email',
  labelFor: 'email',
  placeholder: 'Email',
  value: '',
  icon: <Email />
}

export const WithError: Story<TextFieldProps> = (args) => (
  <Container>
    <TextField {...args} />
  </Container>
)

WithError.args = {
  label: 'Email',
  labelFor: 'email',
  placeholder: 'Email',
  value: '',
  icon: <Email />,
  error: 'Required field'
}
