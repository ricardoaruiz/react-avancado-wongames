import React from 'react'
import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import * as S from './GameDetails.styles'
import { Heading, MediaMatch } from 'components'

export type GameDetailsPlatforms = 'windows' | 'linux' | 'mac'
export type GameDetailsRatings =
  | 'BR0'
  | 'BR10'
  | 'BR12'
  | 'BR14'
  | 'BR16'
  | 'BR18'
export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: GameDetailsPlatforms[]
  publisher: string
  rating: GameDetailsRatings
  genres: string[]
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
  mac: (
    <Apple
      key="logoApple"
      role="img"
      aria-label="Apple logo"
      aria-hidden="false"
    />
  )
}

const ratingDescription = {
  BR0: 'FREE',
  BR10: '10+',
  BR12: '12+',
  BR14: '14+',
  BR16: '16+',
  BR18: '18+'
}

export const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  genres
}: GameDetailsProps) => {
  const getReleaseDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(
      new Date(releaseDate)
    )
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
          <S.Description>{ratingDescription[rating]}</S.Description>
        </S.Info>

        <S.Info>
          <S.Title>Genres</S.Title>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Info>
      </S.Infos>
    </S.Wrapper>
  )
}

export default GameDetails
