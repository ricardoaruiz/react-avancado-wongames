import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import GameItem, { GameItemProps } from './GameItem'

export default {
  title: 'GameItem',
  component: GameItem,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    image: '/img/red-dead-card.png',
    title: 'Red Dead Redemption 2',
    price: 215
  }
} as Meta

const Container = styled.div`
  max-width: 80rem;
  margin: 1rem auto 0 auto;
`

export const Basic: Story<GameItemProps> = (args) => (
  <Container>
    <GameItem {...args} />
  </Container>
)

export const WithPayment: Story<GameItemProps> = (args) => (
  <Container>
    <GameItem {...args} />
  </Container>
)

WithPayment.args = {
  downloadLink: 'http://link'
}
