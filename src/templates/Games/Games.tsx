import React from 'react'

import { Base } from 'templates/Base'
import { GameCard, GameCardProps, Grid } from 'components'
import {
  ExploreSidebar,
  ExploreSidebarSection
} from 'components/ExploreSidebar'

import * as S from './Games.styles'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

export type GamesProps = {
  filterItems: ExploreSidebarSection[]
  games?: GameCardProps[]
}

export const Games = ({ filterItems, games = [] }: GamesProps) => {
  const handleFilter = React.useCallback(() => {
    return
  }, [])

  const handleShowMore = React.useCallback(() => {
    return
  }, [])

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games?.map((game) => (
              <GameCard {...game} key={game.title} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ChevronDown size={50} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
