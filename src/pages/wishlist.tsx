import React from 'react'
import { GetStaticProps } from 'next'

import { Wishlist, WishlistProps } from 'templates'
import { mapGames, mapHighlight } from 'utils/mappers'

// TODO: Remover quando chamar a API
import gamesMock from 'components/GameCardSlider/mock'
import { getRecommendedGames } from 'services'

const WishlistPage = (props: WishlistProps) => {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticProps<WishlistProps> = async () => {
  const recommendedGames = await getRecommendedGames()

  return {
    props: {
      games: gamesMock,
      recommendedTitle: recommendedGames.recommended?.section?.title,
      recommendedHighlight: mapHighlight(
        recommendedGames.recommended?.section!.highlight
      ),
      recommendedGames: mapGames(recommendedGames.recommended?.section!.games)
    }
  }
}

export default WishlistPage
