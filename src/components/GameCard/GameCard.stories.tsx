import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from './GameCard'

export default {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '29.2rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)

Basic.args = {
  image: '/img/red-dead-card.png',
  title: 'Read dead Redemption II',
  developer: 'Rockstar Games',
  normalPrice: 235
}

export const WithOfferPrice: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '29.2rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)

WithOfferPrice.args = {
  image: '/img/red-dead-card.png',
  title: 'Read dead Redemption II',
  developer: 'Rockstar Games',
  normalPrice: 235,
  offerPrice: 215,
  ribbonText: '20% off'
}
