import React from 'react'

import { Base } from 'templates/Base'
import {
  GameCard,
  GameCardProps,
  Grid,
  Heading,
  HighlightProps,
  Showcase
} from 'components'

import * as S from './Wishlist.styles'

export type WishlistProps = {
  games?: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

export const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistProps) => {
  return (
    <Base>
      <S.WishGamesSection>
        <Heading lineLeft lineColor="secondary" color="white">
          Wishlist
        </Heading>

        <Grid>
          {games?.map((game, index) => (
            <GameCard {...game} key={`wish-list-${index}`} />
          ))}
        </Grid>
      </S.WishGamesSection>

      <Showcase
        heading="You may like this games"
        headingColor="white"
        highlight={recommendedHighlight}
        games2={recommendedGames}
      />
    </Base>
  )
}

export default Wishlist
