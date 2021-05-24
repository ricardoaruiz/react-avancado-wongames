import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar, { ExplorerSidebarProps } from './ExploreSidebar'

import items from './mock'

const mockedOnFilter = jest.fn()
const props: ExplorerSidebarProps = {
  items,
  onFilter: mockedOnFilter
}

describe('<ExploreSidebar />', () => {
  beforeEach(() => {
    mockedOnFilter.mockReset()
  })

  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar {...props} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar {...props} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render filter button', () => {
    renderWithTheme(<ExploreSidebar {...props} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values thar are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        {...props}
        initialValues={{ windows: true, 'sort-by': 'LTH' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    renderWithTheme(
      <ExploreSidebar
        {...props}
        initialValues={{ windows: true, 'sort-by': 'LTH' }}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(mockedOnFilter).toBeCalledWith({ windows: true, 'sort-by': 'LTH' })
  })

  it('should filter with checked values', () => {
    renderWithTheme(<ExploreSidebar {...props} />)

    userEvent.click(screen.getByRole('checkbox', { name: /windows/i }))
    userEvent.click(screen.getByRole('checkbox', { name: /linux/i }))
    userEvent.click(screen.getByRole('radio', { name: /low to high/i }))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(mockedOnFilter).toBeCalledWith({
      windows: true,
      linux: true,
      'sort-by': 'LTH'
    })
  })

  it('should altern between radio options', () => {
    renderWithTheme(<ExploreSidebar {...props} />)

    const button = screen.getByRole('button', { name: /filter/i })
    userEvent.click(screen.getByRole('radio', { name: /low to high/i }))
    userEvent.click(button)
    expect(mockedOnFilter).toBeCalledWith({ 'sort-by': 'LTH' })

    userEvent.click(screen.getByRole('radio', { name: /high to low/i }))
    userEvent.click(button)
    expect(mockedOnFilter).toBeCalledWith({ 'sort-by': 'HTL' })
  })
})
