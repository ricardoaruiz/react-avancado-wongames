import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar from './ExploreSidebar'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story = (args) => <ExploreSidebar {...args} />
