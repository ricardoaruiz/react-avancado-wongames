import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from './GameCard'

export default {
  title: 'Game/GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    onFavoriteChange: {
      action: 'favorite button is clicked'
    }
  }
} as Meta

export const Basic: Story<GameCardProps> = (args) => {
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div style={{ maxWidth: '29.2rem', margin: '0 auto' }}>
      <GameCard
        {...args}
        isFavorite={isFavorite}
        onFavoriteChange={setIsFavorite}
      />
    </div>
  )
}

Basic.args = {
  image: '/img/red-dead-card.png',
  title: 'Read dead Redemption II',
  developer: 'Rockstar Games',
  normalPrice: 235,
  withBorderRadius: false
}

export const WithOfferPrice: Story<GameCardProps> = (args) => {
  const [isFavorite, setIsFavorite] = React.useState(false)
  return (
    <div style={{ maxWidth: '29.2rem', margin: '0 auto' }}>
      <GameCard
        {...args}
        isFavorite={isFavorite}
        onFavoriteChange={setIsFavorite}
      />
    </div>
  )
}

WithOfferPrice.args = {
  image: 'https://source.unsplash.com/user/willianjusten/1042x588',
  title: 'Read dead Redemption II',
  developer: 'Rockstar Games',
  normalPrice: 235,
  promotionPrice: 215
}

export const WithRibbon: Story<GameCardProps> = (args) => {
  const [isFavorite, setIsFavorite] = React.useState(false)
  return (
    <div style={{ maxWidth: '29.2rem', margin: '0 auto' }}>
      <GameCard
        {...args}
        isFavorite={isFavorite}
        onFavoriteChange={setIsFavorite}
      />
    </div>
  )
}

WithRibbon.args = {
  image: 'https://source.unsplash.com/user/willianjusten/1042x588',
  title: 'Read dead Redemption II',
  developer: 'Rockstar Games',
  normalPrice: 235,
  promotionPrice: 215,
  ribbonText: '20% off'
}
