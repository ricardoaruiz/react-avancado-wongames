import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import Empty, { EmptyProps } from './Empty'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    onButtonClick: {
      control: {
        type: ''
      },
      action: 'clicked'
    }
  }
} as Meta

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`

export const Basic: Story<EmptyProps> = (args) => (
  <Container>
    <Empty {...args} />
  </Container>
)
Basic.args = {
  title: 'Title of empty state',
  description: 'Description of empty state',
  buttonLabel: 'Go to home'
}
