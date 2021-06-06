/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Games, GamesProps } from './Games'
import filterItems from 'components/ExploreSidebar/mock'
import React from 'react'

jest.mock('templates/Base', () => ({
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="MockedBase">{children}</div>
  )
}))

jest.mock('components/ExploreSidebar', () => ({
  ExploreSidebar: () => <div data-testid="MockedExploreSidebar" />
}))

jest.mock('components/GameCard', () => ({
  GameCard: () => <div data-testid="MockedGameCard" />
}))

const props: GamesProps = {
  filterItems,
  games: [
    {
      slug: 'red-dead-redemption-ii',
      image: '/img/red-dead-card.png',
      title: 'Read dead Redemption II',
      developer: 'Rockstar Games',
      normalPrice: 235,
      withBorderRadius: false
    },
    {
      slug: 'red-dead-redemption-ii',
      image: '/img/red-dead-card.png',
      title: 'Game 02',
      developer: 'Rockstar Games',
      normalPrice: 235,
      withBorderRadius: false
    }
  ]
}

describe('GamesTemplate', () => {
  it('should be render correctly', () => {
    renderWithTheme(<Games {...props} />)

    expect(screen.getByTestId('MockedExploreSidebar')).toBeInTheDocument()
    expect(screen.getAllByTestId('MockedGameCard')).toHaveLength(2)
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
