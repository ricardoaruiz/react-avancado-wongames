import React from 'react'

import { Heading } from 'components/Heading'

import * as S from './CardsList.styles'

type Card = {
  image: string
  flag: string
  number: string
}

export type CardListProps = {
  cards?: Card[]
}

export const CardsList = ({ cards }: CardListProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My Cards
      </Heading>

      {cards?.map(({ image, flag, number }) => (
        <S.Card key={number}>
          <S.CardImage src={image} alt={flag} />
          <S.CardNumber>{number}</S.CardNumber>
        </S.Card>
      ))}
    </S.Wrapper>
  )
}

export default CardsList
