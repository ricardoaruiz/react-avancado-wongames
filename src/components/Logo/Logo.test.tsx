import { render, screen } from '@testing-library/react'

import Logo from './Logo'

describe('<Logo />', () => {
  it('should render correctly - without snapshot', () => {
    render(<Logo />)

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()
  })
})

