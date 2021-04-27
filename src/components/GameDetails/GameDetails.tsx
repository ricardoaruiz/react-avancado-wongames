import React from 'react'
import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import * as S from './GameDetails.styles'
import { Heading, MediaMatch } from 'components'

export type GameDetailsPlatforms = 'windows' | 'linux' | 'apple'
export type GameDetailsProps = {
  developer: string
  releaseDate: Date
  platforms: GameDetailsPlatforms[]
  publisher: string
  rating: string
  genre: string
}

const platformsIcons = {
  windows: (
    <Windows
      key="logoWindow"
      role="img"
      aria-label="Windows logo"
      aria-hidden="false"
    />
  ),
  linux: (
    <Linux
      key="logoLinux"
      role="img"
      aria-label="Linux logo"
      aria-hidden="false"
    />
  ),
  apple: (
    <Apple
      key="logoApple"
      role="img"
      aria-label="Apple logo"
      aria-hidden="false"
    />
  )
}

export const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  genre
}: GameDetailsProps) => {
  const getReleaseDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(releaseDate)
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading color="white" lineLeft lineColor="secondary">
          Game details
        </Heading>
      </MediaMatch>

      <S.Infos>
        <S.Info>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Info>

        <S.Info>
          <S.Title>Release date</S.Title>
          <S.Description>{getReleaseDate()}</S.Description>
        </S.Info>

        <S.Info>
          <S.Title>Platforms</S.Title>
          <S.PlatformIcons>
            {platforms.map((platform) => platformsIcons[platform])}
          </S.PlatformIcons>
        </S.Info>

        <S.Info>
          <S.Title>Publisher</S.Title>
          <S.Description>{publisher}</S.Description>
        </S.Info>

        <S.Info>
          <S.Title>Rating</S.Title>
          <S.Description>{rating}</S.Description>
        </S.Info>

        <S.Info>
          <S.Title>Genres</S.Title>
          <S.Description>{genre}</S.Description>
        </S.Info>
      </S.Infos>
    </S.Wrapper>
  )
}

export default GameDetails
