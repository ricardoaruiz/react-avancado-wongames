import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import GameInfo, { GameInfoProps } from './GameInfo'
import mock from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Container = styled.div`
  max-width: 125rem;
  margin: 0 auto;
  padding: 2rem 2.4rem;
`

export const Basic: Story<GameInfoProps> = (args) => (
  <Container>
    <GameInfo {...args} />
  </Container>
)
