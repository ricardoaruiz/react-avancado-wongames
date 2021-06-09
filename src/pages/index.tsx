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
      newGamesTitle: newGamesSection!.title,
      newGames: newGames.map(({ name, slug, cover, developers, price }) => ({
        slug,
        image: `http://localhost:1337${cover?.url}`,
        title: name,
        developer: developers[0]?.name || null,
        normalPrice: price,
        withBorderRadius: false
      })),

      // Most Popular Games section
      mostPopularGamesTitle: popularGamesSection!.title,
      mostPopularHighlight: {
        title: popularGamesSection!.highlight?.title,
        subtitle: popularGamesSection!.highlight?.subtitle,
        buttonLabel: popularGamesSection!.highlight?.buttonLabel,
        buttonLink: popularGamesSection!.highlight?.buttonLink,
        backgroundImage: `http://localhost:1337${
          popularGamesSection!.highlight?.background?.url
        }`,
        floatImage: `http://localhost:1337${
          popularGamesSection!.highlight?.floatImage?.url
        }`,
        textAlign: popularGamesSection?.highlight?.alignment
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
      upcomingGamesTitle: upcomingGamesSection!.title,
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
        title: upcomingGamesSection!.highlight?.title,
        subtitle: upcomingGamesSection!.highlight?.subtitle,
        buttonLabel: upcomingGamesSection!.highlight?.buttonLabel,
        buttonLink: upcomingGamesSection!.highlight?.buttonLink,
        backgroundImage: `http://localhost:1337${
          upcomingGamesSection!.highlight?.background?.url
        }`,
        floatImage: `http://localhost:1337${
          upcomingGamesSection!.highlight?.floatImage?.url
        }`,
        textAlign: upcomingGamesSection?.highlight?.alignment
      },

      // Free Games section
      freeGamesTitle: freeGamesSection!.title,
      freeGames: freeGames.map(({ name, slug, cover, developers, price }) => ({
        slug,
        image: `http://localhost:1337${cover?.url}`,
        title: name,
        developer: developers[0]?.name || null,
        normalPrice: price,
        withBorderRadius: false
      })),
      freeGamesHighlight: {
        title: freeGamesSection!.highlight?.title,
        subtitle: freeGamesSection!.highlight?.subtitle,
        buttonLabel: freeGamesSection!.highlight?.buttonLabel,
        buttonLink: freeGamesSection!.highlight?.buttonLink,
        backgroundImage: `http://localhost:1337${
          freeGamesSection!.highlight?.background?.url
        }`,
        floatImage: `http://localhost:1337${
          freeGamesSection!.highlight?.floatImage?.url
        }`,
        textAlign: freeGamesSection?.highlight?.alignment
      }
    }
  }
}

export default Home
