import React from 'react'

import { Button } from 'components/Button'

import * as S from './Highlight.styles'

export type HighlightTextAlign = 'left' | 'right'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  textAlign?: HighlightTextAlign
  floatImage?: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  textAlign = 'right',
  floatImage
}: HighlightProps) => {
  return (
    <S.Wrapper backgroundImage={backgroundImage}>
      <S.Content textAlign={textAlign}>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
        {floatImage && (
          <S.FloatImage
            img={floatImage}
            role="img"
            title={title}
            aria-label={title}
          />
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
