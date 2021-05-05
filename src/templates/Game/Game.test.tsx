/* eslint-disable react/display-name */
import { screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import Game, { GameProps } from './Game'

import galleryMock from 'components/Gallery/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetails from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'
import textContextMock from 'components/TextContent/mock'

const props: GameProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: textContextMock.content,
  details: gameDetails,
  upComing: {
    heading: 'Upcoming',
    highlight: highlightMock,
    games2: gamesMock
  },
  recommended: {
    heading: 'You may like these games',
    games1: gamesMock
  }
}

// All used components mocks
jest.mock('components/GameInfo', () => ({
  GameInfo: () => <div data-testid="MockedGameInfo"></div>
}))

jest.mock('components/Gallery', () => ({
  Gallery: () => <div data-testid="MockedGallery"></div>
}))

jest.mock('components/TextContent', () => ({
  TextContent: () => <div data-testid="MockedTextContent"></div>
}))

jest.mock('components/GameDetails', () => ({
  GameDetails: () => <div data-testid="MockedGameDetails"></div>
}))

jest.mock('components/Showcase', () => ({
  Showcase: () => <div data-testid="MockedShowcase"></div>
}))

describe('<Game />', () => {
  it('should render template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('MockedGameInfo')).toBeInTheDocument()
    expect(screen.getByTestId('MockedGallery')).toBeInTheDocument()
    expect(screen.getByTestId('MockedTextContent')).toBeInTheDocument()
    expect(screen.getByTestId('MockedGameDetails')).toBeInTheDocument()
    expect(screen.getAllByTestId('MockedShowcase')).toHaveLength(2)
  })

  it('should render template without gallery', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('MockedGallery')).not.toBeInTheDocument()
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const image = screen.getByRole('image', { name: 'cover' })
    expect(image).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(image).toHaveStyleRule('height', '50rem', {
      media: '(min-width: 768px)'
    })
    expect(image).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
