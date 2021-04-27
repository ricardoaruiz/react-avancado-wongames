import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from './GameDetails'
import props from './mock'

describe('<GameDetails />', () => {
  it('should render correctly - without snapshot', () => {
    renderWithTheme(<GameDetails {...props} />)

    // expect(
    //   screen.getByRole('heading', { name: /game details/i })
    // ).toBeInTheDocument()

    expect(screen.getByText(/developer/i)).toBeInTheDocument()
    expect(screen.getByText(/gearbox software/i)).toBeInTheDocument()

    expect(screen.getByText(/release date/i)).toBeInTheDocument()
    expect(screen.getByText(/november 16, 2019/i)).toBeInTheDocument()

    expect(screen.getByText(/platforms/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /windows logo/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux logo/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /apple logo/i })).toBeInTheDocument()

    expect(screen.getByText(/publisher/i)).toBeInTheDocument()
    expect(screen.getByText(/2k/i)).toBeInTheDocument()

    expect(screen.getByText(/rating/i)).toBeInTheDocument()
    expect(screen.getByText(/18\+/i)).toBeInTheDocument()

    expect(screen.getByText(/genres/i)).toBeInTheDocument()
    expect(screen.getByText(/action \/ adventure/i)).toBeInTheDocument()
  })
})
