import { GetStaticProps } from 'next'

import { Home as HomeTemplate, HomeProps as HomeTemplateProps } from 'templates'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
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

  return {
    props: {
      // Atualiza a página a cada 60 segundos
      revalidate: 60,

      // Banner
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

      // New Games section
      newGames: newGames.map(({ name, slug, cover, developers, price }) => ({
        slug,
        image: `http://localhost:1337${cover?.url}`,
        title: name,
        developer: developers[0]?.name || null,
        normalPrice: price,
        withBorderRadius: false
      })),

      // Most Popular Games section
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`
      },
      mostPopularGames: sections!.popularGames!.games.map(
        ({ name, slug, cover, developers, price }) => ({
          slug,
          image: `http://localhost:1337${cover?.url}`,
          title: name,
          developer: developers[0]?.name || null,
          normalPrice: price,
          withBorderRadius: false
        })
      ),

      // Upcomging Games section
      upCommingGames: upcomingGames.map(
        ({ name, slug, cover, developers, price }) => ({
          slug,
          image: `http://localhost:1337${cover?.url}`,
          title: name,
          developer: developers[0]?.name || null,
          normalPrice: price,
          withBorderRadius: false
        })
      ),
      upCommingHighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`
      },

      // Free Games section
      freeGames: freeGames.map(({ name, slug, cover, developers, price }) => ({
        slug,
        image: `http://localhost:1337${cover?.url}`,
        title: name,
        developer: developers[0]?.name || null,
        normalPrice: price,
        withBorderRadius: false
      })),
      freeGamesHighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`
      }
    }
  }
}

export default Home
