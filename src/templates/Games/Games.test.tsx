/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'

import { Games, GamesProps } from './Games'
import filterItems from 'components/ExploreSidebar/mock'
import React from 'react'
import { QUERY_GAMES } from 'graphql/queries/games'

jest.mock('templates/Base', () => ({
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="MockedBase">{children}</div>
  )
}))

jest.mock('components/ExploreSidebar', () => ({
  ExploreSidebar: () => <div data-testid="MockedExploreSidebar" />
}))

// jest.mock('components/GameCard', () => ({
//   GameCard: () => <div data-testid="MockedGameCard" />
// }))

const props: GamesProps = {
  filterItems
}

describe('GamesTemplate', () => {
  it('should render loading when starting template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games {...props} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should be render sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'Loop Hero',
                    slug: 'loop-hero',
                    cover: {
                      url: '/uploads/loop_hero_98d1e3f81e.jpg'
                    },
                    developers: [{ name: 'Four Quarters' }],
                    price: 34.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games {...props} />
      </MockedProvider>
    )

    //shows loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    //we wait until we have data to get elements
    // screen.get... => tem certeza que tem o elemento na tela
    // screen.query... => não tem certeza que tem o elemento na tela
    // screen.find... => busca elemento na tela em processoa assincronos

    expect(
      await screen.findByTestId('MockedExploreSidebar')
    ).toBeInTheDocument()

    // expect(await screen.findAllByTestId('MockedGameCard')).toHaveLength(1)
    expect(await screen.findByText(/loop hero/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
