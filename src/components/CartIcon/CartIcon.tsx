import React from 'react'
import { ShoppingCart as ShoppintCartIcon } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './CartIcon.styles'

export type CartIconProps = {
  quantity?: number
}

export const CartIcon = ({ quantity = 0 }: CartIconProps) => {
  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
      <ShoppintCartIcon
        role="image"
        aria-label="Open Shopping Cart Icon"
        aria-hidden="false"
      />
    </S.Wrapper>
  )
}

export default CartIcon
