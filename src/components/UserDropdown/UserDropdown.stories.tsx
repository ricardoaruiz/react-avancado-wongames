import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import UserDropdown, { UserDropdownProps } from './UserDropdown'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    userName: 'Ricardo Ruiz'
  }
} as Meta

const Container = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: flex-end;
`

export const Basic: Story<UserDropdownProps> = (args) => (
  <Container>
    <UserDropdown {...args} />
  </Container>
)
