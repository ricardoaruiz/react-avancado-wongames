import React from 'react'

import {
  BannerSlider,
  BannerProps,
  GameCardProps,
  HighlightProps
} from 'components'
import { Base } from 'templates'

import * as S from './Home.styles'
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
    <Base>
      <S.SectionHeader>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </S.SectionHeader>

      <S.SectionNews>
        <Showcase heading="News" games2={newGames} headingColor="black" />
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
    </Base>
  )
}

export default Home
