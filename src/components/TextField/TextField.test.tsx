import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

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
})
