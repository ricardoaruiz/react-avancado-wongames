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
  offerPrice?: number
  ribbonText?: string
  withBorderRadius?: boolean
}

const GameCard = ({
  image,
  title,
  developer,
  normalPrice,
  offerPrice,
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

      <S.Info>
        <div>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </div>
        <S.FavButton role="button">
          <FavoriteBorder size={24} aria-label="add to whishlist" />
        </S.FavButton>
      </S.Info>

      <S.BuyBox hasOfferPrice={!!offerPrice}>
        {offerPrice && (
          <S.NormalPrice aria-label={toCurrencyString(normalPrice)}>
            {toCurrencyString(normalPrice)}
          </S.NormalPrice>
        )}
        <Button>{toCurrencyString(offerPrice || normalPrice)}</Button>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Wrapper>
  )
}

export default GameCard
