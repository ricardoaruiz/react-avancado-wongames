import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from './FormProfile'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeDisabled()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('New password')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
