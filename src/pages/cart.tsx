import React from 'react'
import { GetServerSideProps } from 'next'

import { Cart, CartProps } from 'templates/Cart'

import cartListMock from 'components/CartList/mock'
import paymentOptions from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommendedGames } from 'graphql/generated/QueryRecommendedGames'
import { QUERY_RECOMMENDED_GAMES } from 'graphql/queries/games'
import { mapGames, mapHighlight } from 'utils/mappers'

const CartPage = (props: CartProps) => {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  const client = initializeApollo()

  const { data } = await client.query<QueryRecommendedGames>({
    query: QUERY_RECOMMENDED_GAMES
  })

  return {
    props: {
      cartItems: cartListMock,
      paymentOptionsCards: paymentOptions.cards,
      recommendedGames: {
        heading: data.recommended?.section?.title || 'You may like this games',
        highlight: mapHighlight(data.recommended!.section!.highlight),
        games2: mapGames(data.recommended!.section!.games)
      }
    }
  }
}

export default CartPage
