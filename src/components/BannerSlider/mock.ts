import { BannerProps } from 'components'

export const items: BannerProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Item 01',
    subtitle: 'Item 01 subtitle',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Item 02',
    subtitle: 'Item 02 subtitle',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Item 03',
    subtitle: 'Item 03 subtitle',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'My Ribbon',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  }
]

export default items
