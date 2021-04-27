import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import GameDetails, { GameDetailsProps } from './GameDetails'
import props from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: props,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Container = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 0.5rem;
`

export const Basic: Story<GameDetailsProps> = (args) => (
  <Container>
    <GameDetails {...args} />
  </Container>
)
