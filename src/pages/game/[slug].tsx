import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { Game, GameProps } from 'templates'
import { mapGames } from 'utils/mappers'
import { getGame, getGames, getRecommendedGames } from 'services'

// Remove when call api
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

const Index = (props: GameProps) => {
  const router = useRouter()

  // Se a rota não tiver sido gerada ainda
  // podemos mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <Game {...props} />
}

// Pega todas os possíveis paths em tempo de build para criar as diversas páginas
export const getStaticPaths: GetStaticPaths = async () => {
  const games = await getGames({ limit: 9 })

  const paths = games.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: true }
}

// Pega os dados da página em tempo de build, os "params" recebido aqui vieram do retorno
// do getStaticPaths
export const getStaticProps: GetStaticProps = async (context) => {
  const games = await getGame(`${context.params?.slug}`)

  if (!games.length) {
    // Esse retorno faz o Next redirecionar para a página 404
    return { notFound: true }
  }

  const {
    cover,
    name,
    description,
    short_description,
    price,
    release_date,
    gallery,
    developers,
    platforms,
    publisher,
    rating,
    categories
  } = games[0]

  const recommendedGames = await getRecommendedGames()

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${cover?.url}`,
      gameInfo: {
        title: name,
        description: short_description,
        price
      },
      gallery: {
        items: gallery.map(({ src, label }) => ({
          src: `http://localhost:1337${src}`,
          label: label || 'not found'
        }))
      },
      description,
      details: {
        developer: developers.map((developer) => developer.name).join(', '),
        releaseDate: release_date,
        platforms: platforms.map((platform) => platform.name),
        publisher: publisher!.name,
        rating,
        genres: categories.map((category) => category.name)
      },
      upComing: {
        heading: 'Upcoming',
        highlight: highlightMock,
        games2: gamesMock
      },
      recommended: {
        heading: recommendedGames.recommended?.section?.title,
        games1: mapGames(recommendedGames.recommended?.section?.games)
      }
    }
  }
}

export default Index
