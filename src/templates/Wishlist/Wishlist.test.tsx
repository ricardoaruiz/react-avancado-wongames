/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist, { WishlistProps } from './Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

jest.mock('components/Showcase', () => ({
  Showcase: () => <div data-testid="MockedShowcase" />
}))

// jest.mock('components/Empty', () => ({
//   Empty: () => <div data-testId="MockedEmpty" />
// }))

const props: WishlistProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/Read dead Redemption II/i)).toHaveLength(5)

    expect(screen.getByTestId('MockedShowcase')).toBeInTheDocument()
    // expect(screen.queryByTestId('MockedEmpty')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /your wishlist is empty/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/games added to your wishlist will appear here/i)
    ).not.toBeInTheDocument()
  })

  it('should render empty state when games is empty', () => {
    renderWithTheme(<Wishlist {...props} games={undefined} />)

    // expect(screen.getByTestId('MockedEmpty')).toBeInTheDocument()
    expect(screen.queryAllByText(/Read dead Redemption II/i)).toHaveLength(0)
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/games added to your wishlist will appear here/i)
    ).toBeInTheDocument()
  })
})
