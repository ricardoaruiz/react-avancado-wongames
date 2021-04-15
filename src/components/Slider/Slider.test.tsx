import { render, screen } from '@testing-library/react'

import Slider from './Slider'

describe('<Slider />', () => {
  it('should render correctly - without snapshot', () => {
    render(<Slider />)

    expect(screen.getByRole('heading', { name: /Slider/i })).toBeInTheDocument()
  })
})

