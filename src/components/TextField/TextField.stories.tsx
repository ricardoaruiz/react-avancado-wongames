import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import TextField, { TextFieldProps } from './TextField'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    value: {
      type: 'string'
    },
    onChange: {
      action: 'change'
    }
  }
} as Meta

const Container = styled.div`
  max-width: 40rem;
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
  value: 'test@email.com'
}
