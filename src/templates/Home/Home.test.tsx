/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upCommingGames: [gamesMock[0]],
  upCommingHighlight: highlightMock,
  upCommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock
}

import Home from './Home'

// Criando mock dos componentes que não devem ser testados na home
jest.mock('components/BannerSlider', () => ({
  BannerSlider: () => <div data-testid="Mocked BannerSlider" />
}))

jest.mock('components/Menu', () => ({
  Menu: () => <div data-testid="Mocked Menu" />
}))

jest.mock('components/Footer', () => ({
  Footer: () => <div data-testid="Mocked Footer" />
}))

jest.mock('components/Showcase', () => ({
  Showcase: () => <div data-testid="Mocked Showcase" />
}))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)
    expect(screen.getByTestId('Mocked BannerSlider')).toBeInTheDocument()
    expect(screen.getByTestId('Mocked Menu')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mocked Showcase')).toHaveLength(4)
    expect(screen.getByTestId('Mocked Footer')).toBeInTheDocument()
  })
})
