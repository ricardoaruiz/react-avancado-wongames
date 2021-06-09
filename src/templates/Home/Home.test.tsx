/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGamesTitle: 'New Games',
  newGames: [gamesMock[0]],
  mostPopularGamesTitle: 'Most popular Games',
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGamesTitle: 'Upcoming Games',
  upCommingGames: [gamesMock[0]],
  upCommingHighlight: highlightMock,
  freeGamesTitle: 'Free games',
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock
}

import Home from './Home'

// Criando mock dos componentes que não devem ser testados na home
jest.mock('components/BannerSlider', () => ({
  BannerSlider: () => <div data-testid="Mocked BannerSlider" />
}))

jest.mock('components/Showcase', () => ({
  Showcase: () => <div data-testid="Mocked Showcase" />
}))

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)
    expect(screen.getByTestId('Mocked BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mocked Showcase')).toHaveLength(4)
  })
})
