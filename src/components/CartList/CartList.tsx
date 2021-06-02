import React from 'react'

import { toCurrencyString } from 'utils/numbers/helpers'
import { GameItem } from 'components'

import * as S from './CartList.styles'
import { Button } from 'components/Button'
import Link from 'next/link'

export type CartItem = {
  img: string
  title: string
  price: number
}

export type CartListProps = {
  hasButton?: boolean
  items: CartItem[]
}

export const CartList = ({ hasButton = false, items }: CartListProps) => {
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
        {!hasButton ? (
          <>
            <S.TotalLabel>Total:</S.TotalLabel>
            <S.TotalValue>{toCurrencyString(total)}</S.TotalValue>
          </>
        ) : (
          <>
            <S.TotalValue>{toCurrencyString(total)}</S.TotalValue>
            <Link href="/cart" passHref>
              <Button size="small" as="a">
                Buy it now
              </Button>
            </Link>
          </>
        )}
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartList
