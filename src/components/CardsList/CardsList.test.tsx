import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardsList, { CardListProps } from './CardsList'
import cards from './mock'

const props: CardListProps = {
  cards
}

describe('<CardsList />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CardsList {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )
    expect(screen.getByText('**** **** **** 1234')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /master card/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )
    expect(screen.getByText('**** **** **** 4321')).toBeInTheDocument()
  })
})
