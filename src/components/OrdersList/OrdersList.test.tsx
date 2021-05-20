/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList, { OrdersListProps } from './OrdersList'
import items from './mock'

jest.mock('components/GameItem', () => ({
  GameItem: () => <div data-testid="MockedGameItem" />
}))

jest.mock('components/Empty', () => ({
  Empty: () => <div data-testid="MockedEmpty" />
}))

const props: OrdersListProps = {
  items
}

describe('<OrdersList />', () => {
  it('should render with items', () => {
    renderWithTheme(<OrdersList {...props} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.queryByTestId('MockedEmpty')).not.toBeInTheDocument()
    expect(screen.getAllByTestId('MockedGameItem')).toHaveLength(3)
  })

  it('should render without items', () => {
    renderWithTheme(<OrdersList />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('MockedEmpty')).toBeInTheDocument()
    expect(screen.queryAllByTestId('MockedGameItem')).toHaveLength(0)
  })
})
