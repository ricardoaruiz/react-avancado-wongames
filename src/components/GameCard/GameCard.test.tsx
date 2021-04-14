/* eslint-disable no-irregular-whitespace */
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import GameCard, { GameCardProps } from './GameCard'

const mockedOnFavoriteChange = jest.fn()

const initProps = {
  image: '/img/red-dead-card.png',
  title: 'Read dead Redemption II',
  developer: 'Rockstar Games',
  normalPrice: 235,
  isFavorite: false,
  onFavoriteChange: mockedOnFavoriteChange
} as GameCardProps

describe('<GameCard />', () => {
  beforeEach(() => {
    mockedOnFavoriteChange.mockReset()
  })

  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...initProps} />)

    expect(container.firstChild).toHaveStyle({
      'border-bottom-left-radius': theme.border.radius,
      'border-bottom-right-radius': theme.border.radius
    })

    expect(
      screen.getByRole('img', { name: initProps.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: initProps.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: initProps.developer })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/add to whishlist/i)).toBeInTheDocument()
    expect(screen.getByLabelText('R$ 235,00')).toBeInTheDocument()
    expect(screen.getByLabelText('R$ 235,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render with promotional price', () => {
    renderWithTheme(<GameCard {...initProps} promotionPrice={215} />)

    const promotionPrice = screen.getByLabelText('R$ 215,00')
    expect(promotionPrice).toBeInTheDocument()
    expect(promotionPrice).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    const normalPrice = screen.getByText('R$ 235,00')
    expect(normalPrice).toBeInTheDocument()
    expect(normalPrice).toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render with ribbon', () => {
    renderWithTheme(<GameCard {...initProps} ribbonText="20% off" />)

    expect(screen.getByText(/20% off/i)).toBeInTheDocument()
  })

  it('should render with ribbon without rounded borders', () => {
    const { container } = renderWithTheme(
      <GameCard {...initProps} withBorderRadius={false} />
    )

    expect(container.firstChild).not.toHaveStyle({
      'border-bottom-left-radius': theme.border.radius,
      'border-bottom-right-radius': theme.border.radius
    })
  })

  it('should render whith empty heart icon when the game is not favorite', () => {
    renderWithTheme(
      <GameCard {...initProps} promotionPrice={215} isFavorite={false} />
    )

    expect(screen.getByLabelText(/add to whishlist/i)).toBeInTheDocument()
    expect(
      screen.queryByLabelText(/remove from whishlist/i)
    ).not.toBeInTheDocument()
  })

  it('should render whith filled heart icon when the game is favorite', () => {
    renderWithTheme(
      <GameCard {...initProps} promotionPrice={215} isFavorite={true} />
    )

    expect(screen.queryByLabelText(/add to whishlist/i)).not.toBeInTheDocument()
    expect(screen.getByLabelText(/remove from whishlist/i)).toBeInTheDocument()
  })

  it('should call favorite call back with true when favorite button clicked and the game is not favorite', () => {
    renderWithTheme(<GameCard {...initProps} promotionPrice={215} />)

    const emptyHeartButton = screen.getByLabelText(/add to whishlist/i)
    fireEvent.click(emptyHeartButton)
    expect(mockedOnFavoriteChange).toHaveBeenCalledWith(true)
  })

  it('should call favorite call back with false when favorite button clicked and the game is favorite', () => {
    renderWithTheme(
      <GameCard {...initProps} promotionPrice={215} isFavorite={true} />
    )

    const filledHeartButton = screen.getByLabelText(/remove from whishlist/i)
    fireEvent.click(filledHeartButton)
    expect(mockedOnFavoriteChange).toHaveBeenCalledWith(false)
  })
})
