import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

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
})
