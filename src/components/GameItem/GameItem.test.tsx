import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps } from './GameItem'

const props: GameItemProps = {
  image: '/img/red-dead-card.png',
  title: 'Red Dead Redemption II',
  price: 215
}

describe('<GameItem />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(screen.getByRole('image', { name: /red dead redemption II/i }))

    expect(
      screen.getByRole('heading', { name: /red dead redemption II/i })
    ).toBeInTheDocument()

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render item with download link', () => {
    const downloadLink = 'http://link'
    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
