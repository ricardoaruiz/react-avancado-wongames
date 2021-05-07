import React from 'react'

import { Base } from 'templates/Base'
import {
  Container,
  Divider,
  GameCard,
  GameCardProps,
  Grid,
  Heading,
  HighlightProps,
  Showcase
} from 'components'

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
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Wishlist
        </Heading>

        <Grid>
          {games?.map((game, index) => (
            <GameCard {...game} key={`wish-list-${index}`} />
          ))}
        </Grid>

        <Divider />
      </Container>

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
