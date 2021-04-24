import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from './Showcase'

import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    heading: {
      type: 'string'
    },
    headingColor: {
      defaultValue: 'white',
      control: {
        type: 'select',
        options: ['white', 'black']
      }
    },
    highlight: {
      type: ''
    },
    games1: {
      type: ''
    },
    games2: {
      type: ''
    }
  }
} as Meta

export const Full: Story<ShowcaseProps> = (args) => <Showcase {...args} />
Full.args = {
  heading: 'Most populars',
  games1: gamesMock,
  highlight: highlightMock,
  games2: gamesMock
}

export const WithUpperGameSlider: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)
WithUpperGameSlider.args = {
  heading: 'Most populars',
  games1: gamesMock,
  highlight: highlightMock
}

export const WithLowerGameSlider: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)
WithLowerGameSlider.args = {
  heading: 'Most populars',
  highlight: highlightMock,
  games2: gamesMock
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)
WithoutHighlight.args = {
  heading: 'Most populars',
  games2: gamesMock
}

export const WithoutGameSlider: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)
WithoutGameSlider.args = {
  heading: 'Most populars',
  highlight: highlightMock
}
