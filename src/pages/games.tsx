import React from 'react'
import { GetServerSideProps } from 'next'

import { Games as GamesTemplate, GamesProps } from 'templates'
import filterItems from 'components/ExploreSidebar/mock'

const GamesPage = (props: GamesProps) => {
  return <GamesTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps<GamesProps> = async () => {
  return {
    props: {
      filterItems,
      games: [
        {
          image: '/img/red-dead-card.png',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          withBorderRadius: false
        },
        {
          image: '/img/red-dead-card.png',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          withBorderRadius: false
        },
        {
          image: 'https://source.unsplash.com/user/willianjusten/1042x588',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          promotionPrice: 215,
          ribbonText: '20% off'
        },
        {
          image: '/img/red-dead-card.png',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          withBorderRadius: false
        },
        {
          image: '/img/red-dead-card.png',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          withBorderRadius: false
        },
        {
          image: 'https://source.unsplash.com/user/willianjusten/1042x588',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          promotionPrice: 215,
          ribbonText: '20% off'
        },
        {
          image: '/img/red-dead-card.png',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          withBorderRadius: false
        },
        {
          image: '/img/red-dead-card.png',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          withBorderRadius: false
        },
        {
          image: 'https://source.unsplash.com/user/willianjusten/1042x588',
          title: 'Read dead Redemption II',
          developer: 'Rockstar Games',
          normalPrice: 235,
          promotionPrice: 215,
          ribbonText: '20% off'
        }
      ]
    }
  }
}

export default GamesPage
