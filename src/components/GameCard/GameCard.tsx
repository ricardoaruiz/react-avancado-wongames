import React from 'react'
import Link from 'next/link'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import { Favorite } from '@styled-icons/material/Favorite'

import { Button } from 'components/Button'
import { toCurrencyString } from 'utils/numbers/helpers'

import * as S from './GameCard.styles'
import { Ribbon } from 'components/Ribbon'

export type GameCardProps = {
  slug: string
  image: string
  title: string
  developer: string
  normalPrice: number
  promotionPrice?: number
  ribbonText?: string
  withBorderRadius?: boolean
  isFavorite?: boolean
  onFavoriteChange?: (value: boolean) => void
}

export const GameCard = ({
  slug,
  image,
  title,
  developer,
  normalPrice,
  promotionPrice,
  ribbonText,
  withBorderRadius = true,
  isFavorite = false,
  onFavoriteChange
}: GameCardProps) => {
  return (
    <S.Wrapper withBorderRadius={withBorderRadius}>
      {ribbonText && (
        <Ribbon size="small" color="secondary">
          {ribbonText}
        </Ribbon>
      )}

      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <S.Image src={image} alt={title} aria-label={title} />
        </S.ImageBox>
      </Link>

      <S.InfoContainer>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>
        <S.FavButton
          role="button"
          onClick={
            onFavoriteChange
              ? () => onFavoriteChange(!isFavorite)
              : () => {
                  /* nothing */
                }
          }
        >
          {!isFavorite && (
            <FavoriteBorder size={24} aria-label="add to whishlist" />
          )}
          {isFavorite && (
            <Favorite size={24} aria-label="remove from whishlist" />
          )}
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
