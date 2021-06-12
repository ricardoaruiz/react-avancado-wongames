import { GetStaticProps } from 'next'
import React from 'react'

import { Wishlist, WishlistProps } from 'templates'

import { initializeApollo } from 'utils/apollo'

import { QUERY_RECOMMENDED_GAMES } from 'graphql/queries/games'
import { QueryRecommendedGames } from 'graphql/generated/QueryRecommendedGames'
import { mapGames, mapHighlight } from 'utils/mappers'

// TODO: Remover quando chamar a API
import gamesMock from 'components/GameCardSlider/mock'

const WishlistPage = (props: WishlistProps) => {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticProps<WishlistProps> = async () => {
  const client = initializeApollo()

  const { data } = await client.query<QueryRecommendedGames>({
    query: QUERY_RECOMMENDED_GAMES
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedHighlight: mapHighlight(data.recommended!.section!.highlight),
      recommendedGames: mapGames(data.recommended!.section!.games)
    }
  }
}

export default WishlistPage
