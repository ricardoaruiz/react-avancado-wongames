import React from 'react'

import { Base } from 'templates/Base'
import { Container, GameCardProps } from 'components'

export type GamesProps = {
  games?: GameCardProps[]
}

export const Games = ({ games = [] }: GamesProps) => {
  console.log('games', games)
  return (
    <Base>
      <Container>
        <h1>Games</h1>
      </Container>
    </Base>
  )
}

export default Games
