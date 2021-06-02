import React from 'react'
import { useRouter } from 'next/router'

import { Dropdown, CartItem, CartList } from 'components'

import * as S from './CartDropdown.styles'
import { CartIcon } from 'components/CartIcon'
import { Empty } from 'components/Empty'

export type CartDropdownProps = {
  items: CartItem[]
}

export const CartDropdown = ({ items }: CartDropdownProps) => {
  const history = useRouter()
  const isEmpty = !items.length
  return (
    <S.Wrapper isEmpty={isEmpty}>
      <Dropdown title={<CartIcon quantity={items.length} />}>
        {!isEmpty ? (
          <CartList items={items} hasButton />
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go to explore and choose amazing games"
            buttonLabel="Go to explore"
            onButtonClick={() => history.push('/')}
          />
        )}
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
