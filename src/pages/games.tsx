import React from 'react'
import { GetStaticProps } from 'next'

import { Games as GamesTemplate, GamesProps } from 'templates'
import filterItems from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

const GamesPage = (props: GamesProps) => {
  return <GamesTemplate {...props} />
}

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  const client = initializeApollo()

  const { data } = await client.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      filterItems,
      games: data.games.map(({ name, cover, slug, developers, price }) => ({
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
