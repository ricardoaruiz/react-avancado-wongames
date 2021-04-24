import React from 'react'

import {
  BannerProps,
  Container,
  Footer,
  GameCardProps,
  HighlightProps,
  Menu
} from 'components'

import * as S from './Home.styles'
import BannerSlider from 'components/BannerSlider/BannerSlider'
import { Showcase } from 'components/Showcase'

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
          <Showcase heading="News" games2={newGames} headingColor="black" />
        </Container>
      </S.SectionNews>

      <Showcase
        heading="Most Popular"
        highlight={mostPopularHighlight}
        games2={mostPopularGames}
      />

      <Showcase
        heading="Upcomming"
        games1={upCommingGames}
        highlight={upCommingHighlight}
        games2={upCommingMoreGames}
      />

      <Showcase
        heading="Free games"
        highlight={freeGamesHighlight}
        games1={freeGames}
      />

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Home
