import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import mock from './mock'
import TextContent from './TextContent'

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...mock} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(screen.queryAllByRole('heading', { name: /heading/i })).toHaveLength(
      6
    )
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={mock.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()

    expect(screen.queryAllByRole('heading', { name: /heading/i })).toHaveLength(
      6
    )
  })

  it('should be white font color when in mobile', () => {
    const { container } = renderWithTheme(<TextContent {...mock} />)
    expect(container.firstElementChild).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should be black font color when in desktop', () => {
    const { container } = renderWithTheme(<TextContent {...mock} />)
    expect(container.firstElementChild).toHaveStyleRule(
      'color',
      theme.colors.black,
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
