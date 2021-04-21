import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from './Auth'

describe('<Auth />', () => {
  xit('should render correctly - with snapshot', () => {
    const { container } = renderWithTheme(
      <Auth title="Sign in">
        <p>Teste</p>
      </Auth>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render correctly - without snapshot', () => {
    renderWithTheme(
      <Auth title="sign in">
        <p>Teste</p>
      </Auth>
    )

    // expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // expect(
    //   screen.getByRole('heading', {
    //     name: 'All your favorite games in one place'
    //   })
    // ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument()
  })
})
