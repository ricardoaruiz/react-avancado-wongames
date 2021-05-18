import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import CardsList, { CardListProps } from './CardsList'

import cards from './mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    cards
  }
} as Meta

const Container = styled.div`
  max-width: 80rem;
  margin: 2rem auto;
`

export const Basic: Story<CardListProps> = (args) => (
  <Container>
    <CardsList {...args} />
  </Container>
)
