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
  GameDetailsProps
} from 'components'

export type GameProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryProps
  description: string
  details: GameDetailsProps
}

export const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details
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
    </S.Main>
  </Base>
)

export default Game
