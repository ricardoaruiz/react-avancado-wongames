import { Heading } from 'components/Heading'
import React from 'react'
import * as S from './TextContent.styles'

export type TextContentProps = {
  title?: string
  content: string
}

export const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <section dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  )
}

export default TextContent
