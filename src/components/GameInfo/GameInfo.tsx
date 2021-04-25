import React from 'react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'

import { Heading, Button } from 'components'
import { toCurrencyString } from 'utils/numbers/helpers'

import * as S from './GameInfo.styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

export const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <S.Price>{toCurrencyString(price)}</S.Price>

      <Heading lineBottom>{title}</Heading>
      <S.Description>{description}</S.Description>

      <S.ButtonContaier>
        <Button icon={<AddShoppingCart />} size="large">
          Add to cart
        </Button>
        <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </S.ButtonContaier>
    </S.Wrapper>
  )
}

export default GameInfo
