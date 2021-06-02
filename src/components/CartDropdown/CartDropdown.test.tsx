/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartDropdown, { CartDropdownProps } from './CartDropdown'

import items from 'components/CartList/mock'
import React from 'react'

jest.mock('components/GameItem', () => ({
  GameItem: () => <div data-testid="MockedGameItem" />
}))

jest.mock('components/Empty', () => ({
  Empty: () => <div data-testid="MockedEmpty" />
}))

const props: CartDropdownProps = {
  items
}

describe('<CartDropdown />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CartDropdown {...props} />)

    expect(
      screen.getByRole('image', { name: /open shopping cart/i })
    ).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toHaveAttribute(
      'aria-label',
      'cart items'
    )
    expect(screen.getByLabelText('cart items')).toHaveTextContent(
      `${items.length}`
    )
    expect(screen.queryByTestId('MockedEmpty')).not.toBeInTheDocument()
  })

  it('should render dropdown with cart items and totals', () => {
    renderWithTheme(<CartDropdown {...props} />)

    expect(screen.getAllByTestId('MockedGameItem')).toHaveLength(2)
    expect(screen.getByText('R$ 465,00')).toBeInTheDocument()
    expect(screen.queryByTestId('MockedEmpty')).not.toBeInTheDocument()
  })

  it('should render dropdown with empty state', () => {
    renderWithTheme(<CartDropdown items={[]} />)

    expect(screen.queryByLabelText('cart items')).not.toBeInTheDocument()
    expect(screen.queryAllByTestId('MockedGameItem')).toHaveLength(0)
    expect(screen.getByTestId('MockedEmpty')).toBeInTheDocument()
  })
})
