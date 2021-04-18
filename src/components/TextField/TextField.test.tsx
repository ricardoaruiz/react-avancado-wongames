import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import { Email } from '@styled-icons/material-outlined/Email'
import theme from 'styles/theme'

import TextField from './TextField'

describe('<TextField />', () => {
  it('should render without label', () => {
    const { container } = renderWithTheme(<TextField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(container.querySelector('label')).not.toBeInTheDocument()
  })

  it('should render with label', () => {
    renderWithTheme(<TextField label="Name" />)

    expect(screen.getByText(/name/i)).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="Name" />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
  })

  it('should render with default value', () => {
    renderWithTheme(<TextField value="test@email.com" />)

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'value',
      'test@email.com'
    )
  })

  it('should call onChange when value is typed', async () => {
    const onChange = jest.fn()
    const text = 'test@email.com'
    renderWithTheme(<TextField onChange={onChange} />)

    const inputText = screen.getByRole('textbox')
    userEvent.type(inputText, text)

    await waitFor(() => {
      expect(inputText).toHaveValue(text)
      expect(onChange).toHaveBeenCalledTimes('test@email.com'.length)
      expect(onChange).toHaveBeenCalledWith(text)
    })
  })

  it('should be acessible using tab', () => {
    renderWithTheme(<TextField />)

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render with left icon by default', () => {
    renderWithTheme(<TextField icon={<Email />} />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveStyle({
      order: 1
    })
    const wrapperInput = input.parentElement
    expect(wrapperInput?.querySelector('div')).toHaveStyle({
      order: 0
    })
    expect(wrapperInput?.querySelector('svg')).toBeInTheDocument()
  })

  it('should render with right icon when iconPosition is passed with right', () => {
    renderWithTheme(<TextField icon={<Email />} iconPosition="right" />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveStyle({
      order: 0
    })
    const wrapperInput = input.parentElement
    expect(wrapperInput?.querySelector('div')).toHaveStyle({
      order: 1
    })
    expect(wrapperInput?.querySelector('svg')).toBeInTheDocument()
  })

  it('should render disable input when disabled is passed', () => {
    renderWithTheme(<TextField label="Email" labelFor="email" disabled />)

    expect(screen.getByRole('textbox')).toHaveStyle({
      color: theme.colors.gray,
      cursor: 'default'
    })
    screen.debug(screen.getByText(/email/i))
    expect(screen.getByText(/email/i)).toHaveStyle({
      color: theme.colors.gray,
      cursor: 'default'
    })
  })
})
