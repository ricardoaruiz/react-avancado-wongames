import { renderWithTheme } from 'utils/tests/helpers'

import Auth from './Auth'

describe('<Auth />', () => {
  it('should render correctly - without snapshot', () => {
    const { container } = renderWithTheme(
      <Auth title="signin">
        <p>Teste</p>
      </Auth>
    )

    expect(container).toBeInTheDocument()
  })
})
