import React from 'react'

import {
  GameCardProps,
  GameCardSlider,
  Heading,
  HeadingColor,
  Highlight,
  HighlightProps
} from 'components'

import * as S from './Showcase.styles'

export type ShowcaseProps = {
  heading?: string | null
  headingColor?: HeadingColor
  highlight?: HighlightProps | null
  games1?: GameCardProps[] | null
  games2?: GameCardProps[] | null
  color?: 'black' | 'white'
}

export const Showcase = ({
  heading,
  headingColor = 'white',
  highlight,
  games1,
  games2,
  color = 'white'
}: ShowcaseProps) => {
  return (
    <S.Wrapper>
      {!!heading && (
        <Heading lineLeft lineColor="secondary" color={headingColor}>
          {heading}
        </Heading>
      )}

      {!!games1 && <GameCardSlider items={games1} color={color} />}

      {!!highlight && (
        <S.SectionHighlight>
          <Highlight {...highlight} />
        </S.SectionHighlight>
      )}

      {!!games2 && <GameCardSlider items={games2} color={color} />}
    </S.Wrapper>
  )
}

export default Showcase
