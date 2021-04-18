import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'
import Radio from './Radio'
import userEvent from '@testing-library/user-event'

describe('<Radio />', () => {
  it('should render with label', () => {
    renderWithTheme(<Radio label="Radio" labelFor="option1" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText(/radio/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)

    const radio = screen.getByRole('radio')
    expect(radio.parentElement?.querySelector('label')).not.toBeInTheDocument()
  })

  it('should render with white label by default', () => {
    renderWithTheme(<Radio label="Radio" labelFor="option1" />)

    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render with black label when labelColor is passed with black', () => {
    renderWithTheme(
      <Radio label="Radio" labelFor="option1" labelColor="black" />
    )

    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when label status change', () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="option1"
        labelColor="black"
        onCheck={onCheck}
        value="option1Value"
      />
    )

    const radio = screen.getByRole('radio', {
      name: /Radio/i
    })
    userEvent.click(radio)
    expect(onCheck).toHaveBeenCalledWith('option1Value')
  })

  it('should be acessible with tab', () => {
    renderWithTheme(
      <Radio label="Radio" labelFor="option1" labelColor="black" />
    )

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(
      screen.getByRole('radio', {
        name: /Radio/i
      })
    ).toHaveFocus()
  })
})
