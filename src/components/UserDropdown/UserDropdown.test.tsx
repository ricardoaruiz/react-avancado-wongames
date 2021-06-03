import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from './UserDropdown'

const props = {
  userName: 'John'
}

describe('<UserDropdown />', () => {
  it('should render title correctly', () => {
    renderWithTheme(<UserDropdown {...props} />)

    expect(
      screen.getByRole('image', { name: /user avatar/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/john/i)).toBeInTheDocument()
  })

  it('should render items correctly', () => {
    renderWithTheme(<UserDropdown {...props} />)

    const user = screen.getByText(/john/i)
    userEvent.click(user)

    expect(screen.getByRole('link', { name: /my account/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )
    expect(screen.getByRole('link', { name: /wishlist/i })).toHaveAttribute(
      'href',
      '/wishlist'
    )
    expect(screen.getByRole('link', { name: /sign out/i })).toHaveAttribute(
      'href',
      '/'
    )
  })
})
