/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartDropdown, { CartDropdownProps } from './CartDropdown'

import items from 'components/CartList/mock'
import React from 'react'

jest.mock('components/GameItem', () => ({
  GameItem: () => <div data-testid="MockedGameItem" />
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
  })

  it('should render dropdown with cart items and totals', () => {
    renderWithTheme(<CartDropdown {...props} />)

    expect(screen.getAllByTestId('MockedGameItem')).toHaveLength(2)
    expect(screen.getByText('R$ 465,00')).toBeInTheDocument()
  })
})
