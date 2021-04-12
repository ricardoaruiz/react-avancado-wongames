import { Story, Meta } from '@storybook/react/types-6-0'
import { ButtonProps } from 'components/Button'
import Banner from './Banner'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => <Banner {...args} />
