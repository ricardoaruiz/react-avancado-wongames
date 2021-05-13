import React from 'react'
import { GetServerSideProps } from 'next'

import { Cart, CartProps } from 'templates/Cart'

import cartListMock from 'components/CartList/mock'
import paymentOptions from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

const CartPage = (props: CartProps) => {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  return {
    props: {
      cartItems: cartListMock,
      paymentOptionsCards: paymentOptions.cards,
      recommendedGames: {
        heading: 'You may like these games',
        highlight: highlightMock,
        games2: gamesMock
      }
    }
  }
}

export default CartPage
