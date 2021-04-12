import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from './Button'

describe('<Button />', () => {
  it('should render a medium button by default - snapshot', () => {
    const { container } = renderWithTheme(<Button as="button">Buy now</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a medium button by default', () => {
    renderWithTheme(<Button as="button">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    })
  })

  it('should render a small button when size small is passed', () => {
    renderWithTheme(
      <Button as="button" size="small">
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a large button when size large is passed', () => {
    renderWithTheme(
      <Button as="button" size="large">
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a full width button when fullWidth is passed', () => {
    renderWithTheme(
      <Button as="button" fullWidth>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a button with icon', () => {
    renderWithTheme(
      <Button as="button" icon={<AddShoppingCart data-testid="icon" />}>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button as ling', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
