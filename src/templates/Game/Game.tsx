import { Base } from 'templates'

import * as S from './Game.styles'
import {
  GameInfo,
  GameInfoProps,
  GalleryProps,
  Gallery,
  MediaMatch,
  TextContent,
  GameDetails,
  GameDetailsProps,
  Showcase,
  ShowcaseProps
} from 'components'

export type GameProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryProps
  description: string
  details: GameDetailsProps
  upComing: ShowcaseProps
  recommended: ShowcaseProps
}

export const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upComing,
  recommended
}: GameProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      {!!gallery && (
        <MediaMatch greaterThan="medium">
          <S.SectionGallery>
            <Gallery {...gallery} />
          </S.SectionGallery>
        </MediaMatch>
      )}

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionDetails>
        <GameDetails {...details} />
      </S.SectionDetails>

      <S.SectionUpcoming>
        <Showcase {...upComing} />
      </S.SectionUpcoming>

      <MediaMatch greaterThan="medium">
        <S.SectionRecommended>
          <Showcase {...recommended} />
        </S.SectionRecommended>
      </MediaMatch>
    </S.Main>
  </Base>
)

export default Game
