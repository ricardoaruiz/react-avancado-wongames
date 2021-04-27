import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from './GameDetails'
import props from './mock'

describe('<GameDetails />', () => {
  it('should be render group infos', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/developer/i)).toBeInTheDocument()
    expect(screen.getByText(/gearbox software/i)).toBeInTheDocument()

    expect(screen.getByText(/release date/i)).toBeInTheDocument()
    expect(screen.getByText(/nov 16, 2019/i)).toBeInTheDocument()

    expect(screen.getByText(/publisher/i)).toBeInTheDocument()
    expect(screen.getByText(/2k/i)).toBeInTheDocument()

    expect(screen.getByText(/genres/i)).toBeInTheDocument()
    expect(screen.getByText(/action \/ adventure/i)).toBeInTheDocument()
  })

  it('should be render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/platforms/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /windows logo/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux logo/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /apple logo/i })).toBeInTheDocument()
  })

  it('should free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} rating="BR0" />)

    expect(screen.getByText(/rating/i)).toBeInTheDocument()
    expect(screen.getByText(/FREE/i)).toBeInTheDocument()
  })

  it('should 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/rating/i)).toBeInTheDocument()
    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })
})
