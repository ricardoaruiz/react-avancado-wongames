import { Base } from 'templates'

import * as S from './Game.styles'
import {
  GameInfo,
  GameInfoProps,
  GalleryProps,
  Gallery,
  MediaMatch
} from 'components'

export type GameProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryProps
}

export const Game = ({ cover, gameInfo, gallery }: GameProps) => (
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
    </S.Main>
  </Base>
)

export default Game
