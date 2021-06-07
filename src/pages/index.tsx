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

  const {
    data: { banners, newGames }
  } = await client.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
      banners: banners.map(({ image, title, subtitle, button, ribbon }) => ({
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
      })),
      newGames: newGames.map(({ name, slug, cover, developers, price }) => ({
        slug,
        image: `http://localhost:1337${cover?.url}`,
        title: name,
        developer: developers[0]?.name || null,
        normalPrice: price,
        withBorderRadius: false
      })),
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
