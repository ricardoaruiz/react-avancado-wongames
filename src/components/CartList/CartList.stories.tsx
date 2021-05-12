import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import CartList, { CartListProps } from './CartList'

import mock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    items: {
      control: {
        type: ''
      }
    }
  },
  args: {
    items: mock
  }
} as Meta

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`

export const Basic: Story<CartListProps> = (args) => (
  <Container>
    <CartList {...args} />
  </Container>
)
