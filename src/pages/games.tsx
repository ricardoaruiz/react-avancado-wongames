import React from 'react'
import { GetStaticProps } from 'next'

import { Games as GamesTemplate, GamesProps } from 'templates'
import filterItems from 'components/ExploreSidebar/mock'
import { getCache, getGames } from 'services'

const GamesPage = (props: GamesProps) => {
  return <GamesTemplate {...props} />
}

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  await getGames({ limit: 15 })

  return {
    props: {
      // revalida a página a cada 60 segundos
      revalidate: 60,
      // prop definida em todas as páginas no arquivo (ver arquivo _app.tsx) quando o client do apollo é criado
      // esse cache é passado para o template e quando a query "QUERY_GAMES" for chamada em "Games.tsx" o data retornado será o cache passado
      initialApolloState: getCache(),
      filterItems
    }
  }
}

export default GamesPage
