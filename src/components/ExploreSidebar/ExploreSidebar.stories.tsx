import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import ExploreSidebar, { ExplorerSidebarProps } from './ExploreSidebar'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: { items }
} as Meta

const Container = styled.div`
  max-width: 50rem;
`

export const Basic: Story<ExplorerSidebarProps> = (args) => (
  <Container>
    <ExploreSidebar {...args} />
  </Container>
)

export const WithInitialValues: Story<ExplorerSidebarProps> = (args) => (
  <Container>
    <ExploreSidebar {...args} />
  </Container>
)
WithInitialValues.args = {
  initialValues: { windows: true, 'sort-by': 'LTH' }
}
