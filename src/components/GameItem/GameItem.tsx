import React from 'react'

import { toCurrencyString } from 'utils/numbers/helpers'

import * as S from './GameItem.styles'

export type GameItemProps = {
  image: string
  title: string
  price: number
}

export const GameItem = ({ title, price, image }: GameItemProps) => {
  return (
    <S.Wrapper>
      <S.Image src={image} role="image" aria-label={title} />

      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Price>{toCurrencyString(price)}</S.Price>
      </S.Info>
    </S.Wrapper>
  )
}

export default GameItem
