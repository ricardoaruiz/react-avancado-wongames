import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'
import Gallery from './Gallery'

describe('<Gallery />', () => {
  it('should render correctly - without snapshot', () => {
    const { container } = renderWithTheme(<Gallery {...mock} />)

    expect(container).toBeInTheDocument()
  })
})
