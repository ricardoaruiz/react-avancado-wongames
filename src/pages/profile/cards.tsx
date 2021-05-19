import React from 'react'
import { GetServerSideProps } from 'next'

import { Profile } from 'templates/Profile'
import { CardListProps, CardsList } from 'components'
import cards from 'components/CardsList/mock'

const CardsPage = (props: CardListProps) => {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps<CardListProps> = async () => {
  return {
    props: {
      cards
    }
  }
}

export default CardsPage
