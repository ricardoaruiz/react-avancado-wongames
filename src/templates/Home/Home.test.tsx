import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('<Home />', () => {
  it('should render correctly - without snapshot', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()
  })
})
