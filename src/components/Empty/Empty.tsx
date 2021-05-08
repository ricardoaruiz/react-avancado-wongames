import { Button } from 'components'
import React from 'react'
import * as S from './Empty.styles'

export type EmptyProps = {
  title: string
  description: string
  buttonLabel?: string
  onButtonClick?: () => void
}

export const Empty = ({
  title,
  description,
  buttonLabel,
  onButtonClick
}: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image
        src="/img/empty.svg"
        alt="pessoa sentada no sofá jogando no celular"
        role="image"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {!!buttonLabel && <Button onClick={onButtonClick}>{buttonLabel}</Button>}
    </S.Wrapper>
  )
}

export default Empty
