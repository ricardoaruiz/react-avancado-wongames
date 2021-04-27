import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import GameDetails, { GameDetailsProps } from './GameDetails'
import props from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: props,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Action', 'Adventure', 'Role-playing', 'RPG']
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Container = styled.main`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 0.5rem;
`

export const Basic: Story<GameDetailsProps> = (args) => (
  <Container>
    <GameDetails {...args} />
  </Container>
)
