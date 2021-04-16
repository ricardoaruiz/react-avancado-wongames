import { GetStaticProps } from 'next'

import { Home as HomeTemplate, HomeProps as HomeTemplateProps } from 'templates'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { basic as highlightMock } from 'components/Highlight/mock'

export const Home = (props: HomeTemplateProps) => {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upCommingGames: gamesMock,
      upCommingHighlight: highlightMock,
      upCommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeGamesHighlight: highlightMock
    }
  }
}

export default Home
