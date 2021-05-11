import React from 'react'
import { Download } from '@styled-icons/boxicons-solid/Download'

import { toCurrencyString } from 'utils/numbers/helpers'

import * as S from './GameItem.styles'

export type GameItemProps = {
  image: string
  title: string
  price: number
  downloadLink?: string
}

export const GameItem = ({
  title,
  price,
  image,
  downloadLink
}: GameItemProps) => {
  return (
    <S.Wrapper>
      <S.Image src={image} role="image" aria-label={title} />

      <S.Info>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              role="link"
              aria-label={`Get ${title} here`}
            >
              <Download size={18} />
            </S.DownloadLink>
          )}
        </S.Title>

        <S.Price>{toCurrencyString(price)}</S.Price>
      </S.Info>
    </S.Wrapper>
  )
}

export default GameItem
