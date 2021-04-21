import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import FormSignup from './FormSignup'

export default {
  title: 'Form/FormSignup',
  component: FormSignup
} as Meta

const Container = styled.div`
  max-width: 38rem;
  margin: 0 auto;
`

export const Basic: Story = (args) => (
  <Container>
    <FormSignup {...args} />
  </Container>
)
