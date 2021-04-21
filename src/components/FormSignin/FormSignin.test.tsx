import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignin from './FormSignin'

describe('<FormSignin />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignin />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignin />)

    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument()
  })

  it("should render don't have account link", () => {
    renderWithTheme(<FormSignin />)

    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument()

    const signupLink = screen.getByRole('link', {
      name: /sign up/i
    })
    expect(signupLink).toBeInTheDocument()
    expect(signupLink).toHaveAttribute('href', '/sign-up')
  })
})
