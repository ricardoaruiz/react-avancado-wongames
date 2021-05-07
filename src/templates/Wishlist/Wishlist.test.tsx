/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist, { WishlistProps } from './Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

jest.mock('components/Showcase', () => ({
  Showcase: () => <div data-testid="MockedShowcase" />
}))

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
  })
})
