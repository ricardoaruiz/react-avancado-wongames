import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

import Showcase from './Showcase'

describe('<Showcase />', () => {
  it('should render full correctly', () => {
    const { container } = renderWithTheme(
      <Showcase
        heading="Most popular"
        highlight={highlightMock}
        games2={gamesMock}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Read Dead it’s back' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Come see John’s new adventures' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy now' })).toBeInTheDocument()

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
  })

  it('should render without heading', () => {
    const { container } = renderWithTheme(
      <Showcase highlight={highlightMock} games2={gamesMock} />
    )

    expect(
      screen.queryByRole('heading', { name: /Most popular/i })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Read Dead it’s back' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Come see John’s new adventures' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy now' })).toBeInTheDocument()

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
  })

  it('should render without highlight', () => {
    const { container } = renderWithTheme(
      <Showcase heading="Most popular" games2={gamesMock} />
    )

    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: 'Read Dead it’s back' })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Come see John’s new adventures' })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'Buy now' })
    ).not.toBeInTheDocument()

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
  })

  it('should render without games', () => {
    const { container } = renderWithTheme(
      <Showcase heading="Most popular" highlight={highlightMock} />
    )

    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Read Dead it’s back' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Come see John’s new adventures' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy now' })).toBeInTheDocument()

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(0)
  })
})
