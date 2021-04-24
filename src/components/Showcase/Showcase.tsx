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
  heading?: string
  headingColor?: HeadingColor
  highlight?: HighlightProps
  games1?: GameCardProps[]
  games2?: GameCardProps[]
}

export const Showcase = ({
  heading,
  headingColor = 'white',
  highlight,
  games1,
  games2
}: ShowcaseProps) => {
  return (
    <S.Wrapper>
      {!!heading && (
        <Heading lineLeft lineColor="secondary" color={headingColor}>
          {heading}
        </Heading>
      )}

      {!!games1 && <GameCardSlider items={games1} color="white" />}

      {!!highlight && (
        <S.SectionHighlight>
          <Highlight {...highlight} />
        </S.SectionHighlight>
      )}

      {!!games2 && <GameCardSlider items={games2} color="white" />}
    </S.Wrapper>
  )
}

export default Showcase
