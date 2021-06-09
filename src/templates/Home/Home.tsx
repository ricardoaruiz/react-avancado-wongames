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
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGamesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGamesTitle: string
  upCommingGames: GameCardProps[]
  upCommingHighlight: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

export const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upCommingGames,
  upCommingHighlight,
  freeGamesTitle,
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
          heading={newGamesTitle}
          games2={newGames}
          headingColor="black"
          color="black"
        />
      </S.SectionNews>

      <Showcase
        heading={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games2={mostPopularGames}
      />

      <Showcase
        heading={upcomingGamesTitle}
        games1={upCommingGames}
        highlight={upCommingHighlight}
      />

      <Showcase
        heading={freeGamesTitle}
        highlight={freeGamesHighlight}
        games1={freeGames}
      />
    </Base>
  )
}

export default Home
