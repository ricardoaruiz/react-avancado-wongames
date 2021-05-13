/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Cart, { CartProps } from './Cart'

import cartListMock from 'components/CartList/mock'
import paymentOptions from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

const props: CartProps = {
  cartItems: cartListMock,
  paymentOptionsCards: paymentOptions.cards,
  recommendedGames: {
    heading: 'You may like these games',
    highlight: highlightMock,
    games2: gamesMock
  }
}

jest.mock('components/CartList', () => ({
  CartList: () => <div data-testid="MockedCartList" />
}))

jest.mock('components/PaymentOptions', () => ({
  PaymentOptions: () => <div data-testid="MockedPaymentOptions" />
}))

jest.mock('components/Showcase', () => ({
  Showcase: () => <div data-testid="MockedShowcase" />
}))

jest.mock('components/Empty', () => ({
  Empty: () => <div data-testid="MockedEmpty" />
}))

describe('<Cart />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    expect(screen.queryByTestId('MockedEmpty')).not.toBeInTheDocument()
    expect(screen.getByTestId('MockedCartList')).toBeInTheDocument()
    expect(screen.getByTestId('MockedPaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('MockedShowcase')).toBeInTheDocument()
  })

  it('should render empty state when cart is empty', () => {
    renderWithTheme(<Cart {...props} cartItems={undefined} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('MockedEmpty')).toBeInTheDocument()
    expect(screen.queryByTestId('MockedCartList')).not.toBeInTheDocument()
    expect(screen.queryByTestId('MockedPaymentOptions')).not.toBeInTheDocument()
    expect(screen.getByTestId('MockedShowcase')).toBeInTheDocument()
  })
})
