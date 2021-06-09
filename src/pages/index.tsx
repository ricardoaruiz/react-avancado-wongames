import { GetStaticProps } from 'next'

import { Home as HomeTemplate, HomeProps as HomeTemplateProps } from 'templates'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { mapBanner, mapGames, mapHighlight } from 'utils/mappers'
import { QueryHome } from 'graphql/generated/QueryHome'

export const Home = (props: HomeTemplateProps) => {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo()

  const {
    data: { banners, sections, newGames, upcomingGames, freeGames }
  } = await client.query<QueryHome>({
    query: QUERY_HOME
  })

  const {
    newGames: newGamesSection,
    upcomingGames: upcomingGamesSection,
    popularGames: popularGamesSection,
    freeGames: freeGamesSection
  } = sections!

  return {
    props: {
      // Atualiza a página a cada 60 segundos
      revalidate: 60,

      // Banner
      banners: mapBanner(banners),

      // New Games section
      newGamesTitle: newGamesSection!.title,
      newGames: mapGames(newGames),

      // Most Popular Games section
      mostPopularGamesTitle: popularGamesSection!.title,
      mostPopularHighlight: mapHighlight(popularGamesSection?.highlight),
      mostPopularGames: mapGames(sections!.popularGames!.games),

      // Upcomging Games section
      upcomingGamesTitle: upcomingGamesSection!.title,
      upCommingGames: mapGames(upcomingGames),
      upCommingHighlight: mapHighlight(upcomingGamesSection?.highlight),

      // Free Games section
      freeGamesTitle: freeGamesSection!.title,
      freeGames: mapGames(freeGames),
      freeGamesHighlight: mapHighlight(freeGamesSection?.highlight)
    }
  }
}

export default Home
