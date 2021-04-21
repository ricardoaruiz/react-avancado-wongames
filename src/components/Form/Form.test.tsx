import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from './Form'

describe('<Form />', () => {
  it('should render correctly - without snapshot', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>My nice link</FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-jRQAMF {
        margin-bottom: 1rem;
      }

      .c0 .sc-gKckTs {
        margin-top: 4rem;
        margin-bottom: 1rem;
      }

      .c1 {
        font-size: 1.2rem;
        text-align: center;
      }

      .c1 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 1px solid #3CD3C1;
      }

      .c1 a:hover {
        color: #29b3a3;
      }

      <body>
        <div>
          <form
            class="c0"
          >
            <p
              class="c1"
            >
              My nice link
            </p>
          </form>
        </div>
      </body>
    `)
  })
})
