import React from 'react'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import { Button } from 'components/Button'
import { toCurrencyString } from 'utils/numbers/helpers'

import * as S from './GameCard.styles'
import { Ribbon } from 'components/Ribbon'

export type GameCardProps = {
  image: string
  title: string
  developer: string
  normalPrice: number
  promotionPrice?: number
  ribbonText?: string
  withBorderRadius?: boolean
}

const GameCard = ({
  image,
  title,
  developer,
  normalPrice,
  promotionPrice,
  ribbonText,
  withBorderRadius = true
}: GameCardProps) => {
  return (
    <S.Wrapper withBorderRadius={withBorderRadius}>
      {ribbonText && (
        <Ribbon size="small" color="secondary">
          {ribbonText}
        </Ribbon>
      )}

      <S.ImageBox>
        <S.Image src={image} alt={title} aria-label={title} />
      </S.ImageBox>

      <S.InfoContainer>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton role="button">
          <FavoriteBorder size={24} aria-label="add to whishlist" />
        </S.FavButton>
      </S.InfoContainer>

      <S.BuyBox hasPromotionPrice={!!promotionPrice}>
        {promotionPrice && (
          <S.Price type="old" aria-label={toCurrencyString(normalPrice)}>
            {toCurrencyString(normalPrice)}
          </S.Price>
        )}
        <S.Price aria-label={toCurrencyString(promotionPrice || normalPrice)}>
          {toCurrencyString(promotionPrice || normalPrice)}
        </S.Price>

        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Wrapper>
  )
}

export default GameCard
