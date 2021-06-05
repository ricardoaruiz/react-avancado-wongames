import React from 'react'
import { GetStaticProps } from 'next'

import { Games as GamesTemplate, GamesProps } from 'templates'
import filterItems from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'

const GamesPage = (props: GamesProps) => {
  return <GamesTemplate {...props} />
}

type GameData = {
  name: string
  slug: string
  cover: {
    url: string
  }
  developers: [
    {
      name: string
    }
  ]
  price: number
}

type GamesResponse = {
  games: GameData[]
}

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  const client = initializeApollo()

  const { data } = await client.query<GamesResponse>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      filterItems,
      games: data.games.map(({ name, cover, developers, price }) => ({
        title: name,
        image: `http://localhost:1337${cover.url}`,
        developer: developers[0].name,
        normalPrice: price,
        withBorderRadius: false
      }))
    }
  }
}

export default GamesPage
