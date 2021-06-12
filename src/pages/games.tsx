import React from 'react'
import { GetStaticProps } from 'next'

import { Games as GamesTemplate, GamesProps } from 'templates'
import filterItems from 'components/ExploreSidebar/mock'
import { getGames } from 'services'

const GamesPage = (props: GamesProps) => {
  return <GamesTemplate {...props} />
}

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  const games = await getGames({ limit: 9 })

  return {
    props: {
      revalidate: 60,
      filterItems,
      games: games.map(({ name, cover, slug, developers, price }) => ({
        slug,
        title: name,
        image: `http://localhost:1337${cover!.url}`,
        developer: developers[0].name,
        normalPrice: price,
        withBorderRadius: false
      }))
    }
  }
}

export default GamesPage
