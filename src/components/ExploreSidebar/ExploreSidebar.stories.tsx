import { Story, Meta } from '@storybook/react/types-6-0'
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

export const Basic: Story<ExplorerSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)
