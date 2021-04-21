import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignup from './FormSignup'

describe('<FormSignup />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignup />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render already have account link', () => {
    renderWithTheme(<FormSignup />)

    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()

    const signupLink = screen.getByRole('link', {
      name: /sign in/i
    })
    expect(signupLink).toBeInTheDocument()
    expect(signupLink).toHaveAttribute('href', '/sign-in')
  })
})
