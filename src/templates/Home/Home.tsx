import React from 'react'

import {
  BannerProps,
  Container,
  Footer,
  GameCardProps,
  GameCardSlider,
  Heading,
  Highlight,
  HighlightProps,
  Menu
} from 'components'

import * as S from './Home.styles'
import BannerSlider from 'components/BannerSlider/BannerSlider'

export type HomeProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upCommingGames: GameCardProps[]
  upCommingHighlight: HighlightProps
  upCommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

export const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upCommingGames,
  upCommingHighlight,
  upCommingMoreGames,
  freeGames,
  freeGamesHighlight
}: HomeProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>
        <GameCardSlider items={newGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Most popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="black" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>
        <GameCardSlider items={upCommingGames} color="black" />
        <Highlight {...upCommingHighlight} />
        <GameCardSlider items={upCommingMoreGames} color="black" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Free games
        </Heading>
        <Highlight {...freeGamesHighlight} />
        <GameCardSlider items={freeGames} color="black" />
      </Container>

      <Container>
        <Footer />
      </Container>
    </S.Wrapper>
  )
}

export default Home
