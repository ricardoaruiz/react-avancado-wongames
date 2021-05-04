import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Game, GameProps } from 'templates'

const Index = (props: GameProps) => {
  return <Game {...props} />
}

const descriptionHTML = `
<img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
<hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


<p class="description__copyrights">
CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
</p>`
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

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
      },
      description: descriptionHTML,
      details: gameDetailsMock,
      upComing: {
        heading: 'Upcoming',
        highlight: highlightMock,
        games2: gamesMock
      },
      recommended: {
        heading: 'You may like these games',
        games1: gamesMock
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
