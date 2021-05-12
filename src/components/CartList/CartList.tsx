import React from 'react'

import { toCurrencyString } from 'utils/numbers/helpers'
import { GameItem } from 'components'

import * as S from './CartList.styles'

type CartItem = {
  img: string
  title: string
  price: number
}

export type CartListProps = {
  items: CartItem[]
}

export const CartList = ({ items }: CartListProps) => {
  const total = React.useMemo(() => {
    return items.reduce((total: number, item) => Number(item.price) + total, 0)
  }, [items])

  return (
    <S.Wrapper>
      {items.map(({ img, title, price }) => (
        <GameItem
          img={img}
          title={title}
          price={toCurrencyString(price)}
          key={`gameitem-${title}`}
        />
      ))}

      <S.Footer>
        <S.TotalLabel>Total:</S.TotalLabel>
        <S.TotalValue>{toCurrencyString(total)}</S.TotalValue>
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartList
