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
      <S.SectionHeader>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </S.SectionHeader>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>
          <GameCardSlider items={newGames} />
        </Container>
      </S.SectionNews>

      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most popular
        </Heading>

        <S.SectionHighlight>
          <Highlight {...mostPopularHighlight} />
        </S.SectionHighlight>

        <GameCardSlider items={mostPopularGames} color="white" />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>

        <GameCardSlider items={upCommingGames} color="white" />

        <S.SectionHighlight>
          <Highlight {...upCommingHighlight} />
        </S.SectionHighlight>

        <GameCardSlider items={upCommingMoreGames} color="white" />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary" color="white">
          Free games
        </Heading>

        <S.SectionHighlight>
          <Highlight {...freeGamesHighlight} />
        </S.SectionHighlight>

        <GameCardSlider items={freeGames} color="white" />
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Home
