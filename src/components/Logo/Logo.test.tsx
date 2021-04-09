import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from './Logo'

describe('<Logo />', () => {
  it('should render correctly a white label by default', () => {
    const { container } = renderWithTheme(<Logo />)
    expect(container).toBeInTheDocument()
  })
})
