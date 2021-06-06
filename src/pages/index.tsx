import { GetStaticProps } from 'next'

import { Home as HomeTemplate, HomeProps as HomeTemplateProps } from 'templates'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

export const Home = (props: HomeTemplateProps) => {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo()

  const { data } = await client.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
      banners: data.banners.map(
        ({ image, title, subtitle, button, ribbon }) => ({
          img: `http://localhost:1337${image?.url}`,
          title,
          subtitle,
          buttonLabel: button!.label,
          buttonLink: button!.link,
          ...(ribbon && {
            ribbon: ribbon.text,
            ribbonColor: ribbon.color,
            ribbonSize: ribbon.size
          })
        })
      ),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upCommingGames: gamesMock,
      upCommingHighlight: highlightMock,
      upCommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeGamesHighlight: highlightMock
    }
  }
}

export default Home
