import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty, { EmptyProps } from './Empty'

const mockedButtonClick = jest.fn()

const props: EmptyProps = {
  title: 'Title of empty state',
  description: 'Description of empty state',
  buttonLabel: 'Go to home',
  onButtonClick: mockedButtonClick
}

describe('<Empty />', () => {
  beforeEach(() => {
    mockedButtonClick.mockReset()
  })

  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('image', {
        name: /pessoa sentada no sofá jogando no celular/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /title of empty state/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/description of empty state/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /go to home/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render with without button', () => {
    renderWithTheme(<Empty {...props} buttonLabel={undefined} />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should call callback click when button is clicked', () => {
    renderWithTheme(<Empty {...props} />)

    userEvent.click(screen.getByRole('button', { name: /go to home/i }))
    expect(mockedButtonClick).toHaveBeenCalledTimes(1)
  })
})
