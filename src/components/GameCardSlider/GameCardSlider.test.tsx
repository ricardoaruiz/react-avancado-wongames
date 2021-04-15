import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider, { GameCardSliderProps } from './GameCardSlider'

const props: GameCardSliderProps = {
  color: 'white',
  items: [
    {
      image: '/img/red-dead-card.png',
      title:
        'Read dead Redemption II  fdg dfogjdg jdpgodg psjg spdgjspgjs pgsj gps jgpsd gjspg',
      developer: 'Rockstar Games',
      normalPrice: 235,
      promotionPrice: 215,
      withBorderRadius: false
    },
    {
      image: 'https://source.unsplash.com/user/willianjusten/1042x588',
      title: 'Read dead Redemption II',
      developer: 'Rockstar Games',
      normalPrice: 235,
      promotionPrice: 215,
      ribbonText: '20% off',
      withBorderRadius: false
    }
  ]
}

describe('<GameCardSlider />', () => {
  it('should render correctly - without snapshot', () => {
    const { container } = renderWithTheme(<GameCardSlider {...props} />)
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
  })
})
