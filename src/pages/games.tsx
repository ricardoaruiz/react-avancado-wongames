import React from 'react'
import { GetServerSideProps } from 'next'

import { Games as GamesTemplate, GamesProps } from 'templates'

const GamesPage = (props: GamesProps) => {
  return <GamesTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps<GamesProps> = async () => {
  return {
    props: {
      games: []
    }
  }
}

export default GamesPage
