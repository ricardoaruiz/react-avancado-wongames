import React from 'react'
import { GetServerSideProps } from 'next'

import { Cart, CartProps } from 'templates/Cart'

import cartListMock from 'components/CartList/mock'
import paymentOptions from 'components/PaymentOptions/mock'
import { mapGames, mapHighlight } from 'utils/mappers'
import { getRecommendedGames } from 'services'

const CartPage = (props: CartProps) => {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  const recommendedGames = await getRecommendedGames()

  return {
    props: {
      cartItems: cartListMock,
      paymentOptionsCards: paymentOptions.cards,
      recommendedGames: {
        heading:
          recommendedGames.recommended?.section?.title ||
          'You may like this games',
        highlight: mapHighlight(
          recommendedGames.recommended!.section!.highlight
        ),
        games2: mapGames(recommendedGames.recommended!.section!.games)
      }
    }
  }
}

export default CartPage
