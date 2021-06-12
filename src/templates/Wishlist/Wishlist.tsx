import React from 'react'
import { useRouter } from 'next/router'

import { Base } from 'templates/Base'
import {
  Container,
  Divider,
  Empty,
  GameCard,
  GameCardProps,
  Grid,
  Heading,
  HighlightProps,
  Showcase
} from 'components'

export type WishlistProps = {
  games?: GameCardProps[]
  recommendedTitle?: string | null
  recommendedHighlight?: HighlightProps | null
  recommendedGames?: GameCardProps[] | null
}

export const Wishlist = ({
  games,
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistProps) => {
  const router = useRouter()
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Wishlist
        </Heading>

        {!games?.length ? (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            buttonLabel="Go back to home"
            onButtonClick={() => router.push('/')}
          />
        ) : (
          <Grid>
            {games?.map((game, index) => (
              <GameCard {...game} key={`wish-list-${index}`} />
            ))}
          </Grid>
        )}

        <Divider />
      </Container>

      <Showcase
        heading={recommendedTitle || 'You may like this games'}
        headingColor="white"
        highlight={recommendedHighlight}
        games2={recommendedGames}
      />
    </Base>
  )
}

export default Wishlist
