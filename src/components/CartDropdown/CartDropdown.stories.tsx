import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import CartDropdown, { CartDropdownProps } from './CartDropdown'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    items
  }
} as Meta

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`

export const Basic: Story<CartDropdownProps> = (args) => (
  <Container>
    <CartDropdown {...args} />
  </Container>
)
