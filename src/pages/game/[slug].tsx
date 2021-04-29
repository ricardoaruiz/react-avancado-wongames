import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Game, GameProps } from 'templates'

const Index = (props: GameProps) => {
  return <Game {...props} />
}

// Pega os dados da página em tempo de build
export const getStaticProps: GetStaticProps<GameProps> = async () => {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
      gameInfo: {
        title: 'Red dead redemption II',
        description:
          'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
        price: 219
      },
      gallery: {
        items: [
          {
            src: '/img/games/cyberpunk-1.jpg',
            label: 'Gallery Image 1'
          },
          {
            src: '/img/games/cyberpunk-2.jpg',
            label: 'Gallery Image 2'
          },
          {
            src: '/img/games/cyberpunk-3.jpg',
            label: 'Gallery Image 3'
          },
          {
            src: '/img/games/cyberpunk-4.jpg',
            label: 'Gallery Image 4'
          },
          {
            src: '/img/games/cyberpunk-5.jpg',
            label: 'Gallery Image 5'
          },
          {
            src: '/img/games/cyberpunk-6.jpg',
            label: 'Gallery Image 6'
          }
        ]
      }
    }
  }
}

// Pega todas os possíveis paths em tempo de build para criar as diversas páginas
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export default Index
