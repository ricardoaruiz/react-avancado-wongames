import React from 'react'

import { Dropdown, CartItem, CartList } from 'components'

import * as S from './CartDropdown.styles'
import { CartIcon } from 'components/CartIcon'

export type CartDropdownProps = {
  items: CartItem[]
}

export const CartDropdown = ({ items }: CartDropdownProps) => {
  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon quantity={items.length} />}>
        <CartList items={items} hasButton />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
