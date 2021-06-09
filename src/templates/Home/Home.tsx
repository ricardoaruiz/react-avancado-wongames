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
        <Showcase
          heading="News"
          games2={newGames}
          headingColor="black"
          color="black"
        />
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
