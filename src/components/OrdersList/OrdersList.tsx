import React from 'react'
import { useRouter } from 'next/router'

import { GameItem, GameItemProps, Heading } from 'components'

import * as S from './OrdersList.styles'
import { Empty } from 'components/Empty'

export type OrdersListProps = {
  items?: GameItemProps[]
}

export const OrdersList = ({ items }: OrdersListProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" size="small">
        My orders
      </Heading>

      {items?.length ? (
        items?.map((item, index) => (
          <GameItem {...item} key={`game-item-${index}`} />
        ))
      ) : (
        <Empty
          title="You have no orders yest"
          description="Go back to the store ans explore greate games and offers"
          buttonLabel="Go home"
          onButtonClick={() => router.push('/')}
        />
      )}
    </S.Wrapper>
  )
}

export default OrdersList
