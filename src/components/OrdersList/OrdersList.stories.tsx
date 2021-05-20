import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import OrdersList, { OrdersListProps } from './OrdersList'
import items from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items
  },
  argTypes: {
    items: {
      control: {
        type: null
      }
    }
  }
} as Meta

const Container = styled.div`
  max-width: 85rem;
  margin: 0 auto;
`

export const Basic: Story<OrdersListProps> = (args) => (
  <Container>
    <OrdersList {...args} />
  </Container>
)

export const Empty: Story<OrdersListProps> = () => (
  <Container>
    <OrdersList />
  </Container>
)
