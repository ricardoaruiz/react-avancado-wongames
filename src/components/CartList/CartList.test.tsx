/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'
import CartList, { CartListProps } from './CartList'

const props: CartListProps = {
  items: mock
}

jest.mock('components/GameItem', () => ({
  GameItem: () => <div data-testid="MockedGameItem" />
}))

describe('<CartList />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CartList {...props} />)

    expect(screen.getAllByTestId('MockedGameItem')).toHaveLength(2)
    expect(screen.getByText(/total:/i)).toBeInTheDocument()
    expect(screen.getByText('R$ 465,00')).toHaveStyle({
      color: '#F231A5'
    })
  })
})
