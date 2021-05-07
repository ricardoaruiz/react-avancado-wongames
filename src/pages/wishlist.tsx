import { GetStaticProps } from 'next'
import React from 'react'

import { Wishlist, WishlistProps } from 'templates'

// TODO: Remover quando chamar a API
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

const WishlistPage = (props: WishlistProps) => {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticProps<WishlistProps> = async () => {
  return {
    props: {
      games: gamesMock,
      recommendedHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}

export default WishlistPage
