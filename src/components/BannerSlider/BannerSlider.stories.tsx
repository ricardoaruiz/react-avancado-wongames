import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider from './BannerSlider'

import { BannerSliderProps } from './BannerSlider'
import { items } from './mock'

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
  items
}
