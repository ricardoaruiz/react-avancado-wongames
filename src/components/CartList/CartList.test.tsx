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
  it('should render without buy it now button', () => {
    renderWithTheme(<CartList {...props} />)

    expect(screen.getAllByTestId('MockedGameItem')).toHaveLength(2)
    expect(screen.getByText(/total:/i)).toBeInTheDocument()
    expect(screen.getByText('R$ 465,00')).toHaveStyle({
      color: '#F231A5'
    })
  })

  it('should render with buy it now button', () => {
    renderWithTheme(<CartList {...props} hasButton={true} />)

    expect(screen.getAllByTestId('MockedGameItem')).toHaveLength(2)
    expect(screen.queryByText(/total:/i)).not.toBeInTheDocument()
    expect(screen.getByText('R$ 465,00')).toHaveStyle({
      color: '#F231A5'
    })
    expect(screen.getByRole('link', { name: /buy it now/i })).toHaveAttribute(
      'href',
      '/cart'
    )
  })
})
