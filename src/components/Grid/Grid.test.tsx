import { renderWithTheme } from 'utils/tests/helpers'

import Grid from './Grid'

describe('<Grid />', () => {
  it('should render correctly - without snapshot', () => {
    const { container } = renderWithTheme(<Grid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(25rem,auto));
        gap: 3.2rem;
        margin: 3.2rem 0;
      }

      <div
        class="c0"
      />
    `)
  })
})
