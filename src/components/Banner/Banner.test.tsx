import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Banner, { BannerProps } from './Banner'

const initialProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
} as BannerProps

describe('<Banner />', () => {
  it('should render correctly snapshot', () => {
    const { container } = renderWithTheme(<Banner {...initialProps} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render correctly', () => {
    renderWithTheme(<Banner {...initialProps} />)

    expect(screen.getByLabelText(/defy death/i)).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /play the new crashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...initialProps}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(ribbon).toHaveStyle({
      height: theme.spacings.small,
      fontSize: theme.font.sizes.xsmall
    })
  })
})
