import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import FormProfile from './FormProfile'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Container = styled.div`
  max-width: 86rem;
  margin: 0 auto;
`

export const Basic: Story = (args) => (
  <Container>
    <FormProfile {...args} />
  </Container>
)
