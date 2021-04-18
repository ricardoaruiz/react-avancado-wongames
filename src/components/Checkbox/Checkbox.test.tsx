import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Action" labelFor="action" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    const label = screen.getByText(/action/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'action')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('id', '')
  })

  it('should render with whith label by default', () => {
    renderWithTheme(<Checkbox label="White label" labelFor="action" />)

    expect(screen.getByText('White label')).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render with black label when label color is passed', () => {
    renderWithTheme(
      <Checkbox label="Black label" labelFor="action" labelColor="black" />
    )

    expect(screen.getByText('Black label')).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should call onCheck with true when values change', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Checkbox label="Black label" labelFor="action" onCheck={onCheck} />
    )

    expect(onCheck).not.toHaveBeenCalled()

    const checkbox = screen.getByRole('checkbox', { name: /black label/i })
    userEvent.click(checkbox)

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(true)
    })
  })

  it('should call onCheck with false when values change', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Checkbox
        label="Black label"
        labelFor="action"
        onCheck={onCheck}
        isChecked
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    const checkbox = screen.getByRole('checkbox', { name: /black label/i })
    userEvent.click(checkbox)

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(false)
    })
  })

  it('should render unchecked by default', () => {
    renderWithTheme(
      <Checkbox label="Black label" labelFor="action" labelColor="black" />
    )

    const checkbox = screen.getByRole('checkbox', { name: /black label/i })
    expect(checkbox).not.toHaveAttribute('checked')
    expect(checkbox).not.toHaveStyle({
      'border-color': theme.colors.primary,
      background: theme.colors.primary
    })
  })

  it('should render checked when isChecked is true', async () => {
    renderWithTheme(
      <Checkbox
        label="Black label"
        labelFor="action"
        labelColor="black"
        isChecked
      />
    )

    await waitFor(() => {
      const checkbox = screen.getByRole('checkbox', { name: /black label/i })
      expect(checkbox).toHaveStyle({
        'border-color': theme.colors.primary,
        background: theme.colors.primary
      })
    })
  })

  it('should be acessible with tab', async () => {
    renderWithTheme(
      <Checkbox label="Black label" labelFor="action" labelColor="black" />
    )

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('checkbox', { name: /black label/i })).toHaveFocus()
    expect(document.body).not.toHaveFocus()
  })
})
