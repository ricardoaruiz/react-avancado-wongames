import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import ProfileMenu, { ProfileMenuProps } from './ProfileMenu'

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    activeLink: '/profile/cards'
  },
  argTypes: {
    activeLink: {
      default: '/profile/cards',
      control: {
        type: 'select',
        options: ['/profile/me', '/profile/cards', '/profile/orders']
      }
    }
  }
} as Meta

const Container = styled.div`
  max-width: 40rem;
`

export const Basic: Story<ProfileMenuProps> = (args) => (
  <Container>
    <ProfileMenu {...args} />
  </Container>
)
