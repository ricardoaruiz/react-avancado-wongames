import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight, { HighlightProps } from './Highlight'

const initialProps = {
  title: 'read Dead it’s back',
  subtitle: 'come see john’s new adventures',
  buttonLabel: 'buy now',
  buttonLink: 'http://wongames/read-dead',
  backgroundImage: '/img/red-dead-bg.jpg',
  textAlign: 'right'
} as HighlightProps

describe('<Highlight />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Highlight {...initialProps} />)

    expect(
      screen.getByRole('heading', { name: /read Dead it’s back/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /come see john’s new adventures/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      'http://wongames/read-dead'
    )
  })

  it('should render with backgound', () => {
    const { container } = renderWithTheme(<Highlight {...initialProps} />)

    expect(container.firstChild).toHaveStyle({
      'background-image': `url(${initialProps.backgroundImage})`
    })
  })

  it('should render with text right aligned by default without float image', () => {
    renderWithTheme(<Highlight {...initialProps} />)

    const teste = screen.getByRole('heading', {
      name: /read dead it’s back/i
    }).parentElement

    expect(teste).toHaveStyle({ 'text-align': 'right' })
    expect(
      screen.queryByLabelText(/read Dead it’s back/i)
    ).not.toBeInTheDocument()
  })

  it('should render with text left aligned without float image', () => {
    renderWithTheme(<Highlight {...initialProps} textAlign="left" />)

    const content = screen.getByRole('heading', {
      name: /read dead it’s back/i
    }).parentElement

    expect(content).toHaveStyle({ 'text-align': 'left' })
    expect(
      screen.queryByLabelText(/read Dead it’s back/i)
    ).not.toBeInTheDocument()
  })

  it('should render with text left aligned and right float image', () => {
    const { container } = renderWithTheme(
      <Highlight
        {...initialProps}
        textAlign="left"
        floatImage="/img/red-dead.png"
      />
    )

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'content floatimage'"
    })
    const img = screen.getByRole('img', { name: /read Dead it’s back/i })
    expect(img).toHaveStyle({
      justifySelf: 'end'
    })
    expect(img).toHaveAttribute('src', '/img/red-dead.png')
  })

  it('should render with text right aligned and left float image', () => {
    const { container } = renderWithTheme(
      <Highlight
        {...initialProps}
        textAlign="right"
        floatImage="/img/red-dead1.png"
      />
    )

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'floatimage content'"
    })
    const img = screen.getByRole('img', { name: /read Dead it’s back/i })
    expect(img).toHaveStyle({
      justifySelf: 'start'
    })
    expect(img).toHaveAttribute('src', '/img/red-dead1.png')
  })
})
