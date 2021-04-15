import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider from './BannerSlider'

import { BannerSliderProps } from './BannerSlider'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)

Basic.args = {
  items: [
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
}
