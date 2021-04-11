import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from './Heading'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)
    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyle({ color: '#030517' })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Most Populars</Heading>)
    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render with left line heading', () => {
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>)
    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
  })

  it('should render with left line heading with passed color', () => {
    renderWithTheme(
      <Heading lineLeft lineColor="primary">
        Most Populars
      </Heading>
    )
    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
  })

  it('should render with bottom line heading', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)
    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render with bottom line heading with passed color', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="secondary">
        Most Populars
      </Heading>
    )
    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })

  it('should render a small heading', () => {
    renderWithTheme(<Heading size="small">Most Populars</Heading>)
    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyle({ 'font-size': '1.6rem' })

    expect(
      screen.getByRole('heading', {
        name: /most populars/i
      })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })
})
