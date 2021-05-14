import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from './ProfileMenu'

describe('<ProfileMenu />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )
    expect(screen.getByRole('link', { name: /my cards/i })).toHaveAttribute(
      'href',
      '/profile/cards'
    )
    expect(screen.getByRole('link', { name: /my orders/i })).toHaveAttribute(
      'href',
      '/profile/orders'
    )
    expect(screen.getByRole('link', { name: /sign out/i })).toHaveAttribute(
      'href',
      '/sign-in'
    )
  })

  it('should render correctly on mobile', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('image', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/my profile/i)).toHaveStyleRule('display', 'none')

    expect(screen.getByRole('image', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByText(/my cards/i)).toHaveStyleRule('display', 'none')

    expect(
      screen.getByRole('image', { name: /my orders/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/my orders/i)).toHaveStyleRule('display', 'none')

    expect(screen.getByRole('image', { name: /sign out/i })).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toHaveStyleRule('display', 'none')
  })

  it('should render correctly on desktop', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('image', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/my profile/i)).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )

    expect(screen.getByRole('image', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByText(/my cards/i)).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })

    expect(
      screen.getByRole('image', { name: /my orders/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/my orders/i)).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })

    expect(screen.getByRole('image', { name: /sign out/i })).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })

  it('should render the menu with and active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      'background-color': '#F231A5',
      color: '#FAFAFA'
    })
  })
})
