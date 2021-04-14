/* eslint-disable no-irregular-whitespace */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import GameCard from './GameCard'

const initProps = {
  image: '/img/red-dead-card.png',
  title: 'Read dead Redemption II',
  developer: 'Rockstar Games',
  normalPrice: 235
}

describe('<GameCard />', () => {
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
    expect(
      screen.getByRole('button', { name: /r\$ 235,00/i })
    ).toBeInTheDocument()
  })

  it('should render with offer price', () => {
    renderWithTheme(<GameCard {...initProps} offerPrice={215} />)

    expect(
      screen.getByRole('button', { name: /r\$ 215,00/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/r\$ 235,00/i)).toBeInTheDocument()
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
})
