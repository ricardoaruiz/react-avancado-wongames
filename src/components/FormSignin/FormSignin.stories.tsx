import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import FormSignin from './FormSignin'

export default {
  title: 'Form/FormSignin',
  component: FormSignin
} as Meta

const Container = styled.div`
  max-width: 38rem;
  margin: 0 auto;
`

export const Basic: Story = (args) => (
  <Container>
    <FormSignin {...args} />
  </Container>
)
