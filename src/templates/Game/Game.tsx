import { Base } from 'templates'

import * as S from './Game.styles'
import { GameInfo, GameInfoProps } from 'components'

export type GameProps = {
  cover: string
  gameInfo: GameInfoProps
}

export const Game = ({ cover, gameInfo }: GameProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
)

export default Game
