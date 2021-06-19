import React from 'react'

import { Base } from 'templates/Base'
import { GameCard, Grid } from 'components'
import {
  ExploreSidebar,
  ExploreSidebarSection
} from 'components/ExploreSidebar'

import * as S from './Games.styles'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import { useQueryGames } from 'graphql/queries/games'

export type GamesProps = {
  filterItems: ExploreSidebarSection[]
}

export const Games = ({ filterItems }: GamesProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  console.log(data)

  const handleFilter = React.useCallback(() => {
    return
  }, [])

  const handleShowMore = React.useCallback(() => {
    fetchMore({
      variables: {
        limit: 15,
        start: data ? data?.games.length : 0
      }
    })
    return
  }, [data, fetchMore])

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.games.map(({ slug, name, cover, developers, price }) => {
                const mappedGame = {
                  slug,
                  title: name,
                  image: `http://localhost:1337${cover!.url}`,
                  developer: developers[0].name,
                  normalPrice: price,
                  withBorderRadius: false
                }
                return <GameCard {...mappedGame} key={mappedGame.title} />
              })}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ChevronDown size={50} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default Games
