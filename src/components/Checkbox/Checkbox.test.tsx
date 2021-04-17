import { screen } from '@testing-library/react'
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
})
