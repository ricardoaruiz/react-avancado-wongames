import React from 'react'
import sanitizeHtml from 'sanitize-html'

import { Button, Ribbon, RibbonColor, RibbonSize } from 'components'

import * as S from './Banner.styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonColor?: RibbonColor
  ribbonSize?: RibbonSize
}

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.Image src={img} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(subtitle) }}
        />
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}

export default Banner
