import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown, { DropdownProps } from './Dropdown'

const props: DropdownProps = {
  title: <h1>Click here</h1>,
  children: <span>Content</span>
}

describe('<Dropdown />', () => {
  it('should render closed dropdown', () => {
    renderWithTheme(<Dropdown {...props} />)

    expect(
      screen.getByRole('button', { name: /toggle dropdown/i })
    ).toBeInTheDocument()

    const content = screen.getByLabelText(/drop down options/i)
    expect(content).toHaveAttribute('aria-hidden', 'true')
    expect(content).toHaveStyle({
      opacity: 0
    })
  })

  it('should render opened dropdown', () => {
    renderWithTheme(<Dropdown {...props} />)

    const button = screen.getByRole('button', { name: /toggle dropdown/i })
    userEvent.click(button)

    const content = screen.getByLabelText(/drop down options/i)
    expect(content).toHaveAttribute('aria-hidden', 'false')
    expect(content).toHaveStyle({
      opacity: 1
    })
  })
})
