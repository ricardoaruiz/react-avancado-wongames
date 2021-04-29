import { Base } from 'templates'

import * as S from './Game.styles'

export const Game = () => (
  <Base>
    <S.Cover
      src="https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg"
      role="image"
      aria-label="cover"
    />

    <S.Main>
      <h1>Teste</h1>
    </S.Main>
  </Base>
)

export default Game
