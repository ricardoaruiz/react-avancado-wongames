import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'
import PaymentOptions from './PaymentOptions'

const mockedHandlePayment = jest.fn()
const props = {
  cards: mock.cards,
  handlePayment: mockedHandlePayment
}

describe('<PaymentOptions />', () => {
  beforeEach(() => {
    mockedHandlePayment.mockReset()
  })

  it('should render correctly', () => {
    renderWithTheme(<PaymentOptions {...props} />)

    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /continue shopping/i })
    ).toHaveAttribute('href', '/')
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render without card list', () => {
    renderWithTheme(<PaymentOptions {...props} cards={undefined} />)

    expect(
      screen.queryAllByRole('image', { name: /image card/i })
    ).toHaveLength(0)
    expect(screen.queryByText('**** **** **** 1234')).not.toBeInTheDocument()
    expect(screen.queryByText('**** **** **** 4321')).not.toBeInTheDocument()
  })

  it('should render with card list', () => {
    renderWithTheme(<PaymentOptions {...props} />)

    expect(
      screen.getByRole('image', { name: /visa card/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('image', { name: /master card card/i })
    ).toBeInTheDocument()
    expect(screen.getByText('**** **** **** 1234')).toBeInTheDocument()
    expect(screen.getByText('**** **** **** 4321')).toBeInTheDocument()
  })

  it('should button is disabled when a card is not selected', () => {
    renderWithTheme(<PaymentOptions {...props} />)
    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toBeDisabled()
    userEvent.click(button)
    expect(mockedHandlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when a card is selected and button is clicked', async () => {
    renderWithTheme(<PaymentOptions {...props} />)

    const firstCard = screen.getByRole('radio', { name: '**** **** **** 1234' })
    userEvent.click(firstCard)

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /buy now/i })
      expect(button).not.toBeDisabled()
      userEvent.click(button)
      expect(mockedHandlePayment).toHaveBeenCalledTimes(1)
    })
  })
})
