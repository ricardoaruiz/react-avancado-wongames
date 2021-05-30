import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon, { CartIconProps } from './CartIcon'

const props: CartIconProps = {
  quantity: 2
}

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(
      screen.getByRole('image', { name: /open shopping cart/i })
    ).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should be render with badge', () => {
    renderWithTheme(<CartIcon {...props} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('should be render with badge only if has positive numbers', () => {
    renderWithTheme(<CartIcon {...props} quantity={-1} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText('2')).not.toBeInTheDocument()
  })
})
