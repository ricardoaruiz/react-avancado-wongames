import React from 'react'
import { useRouter } from 'next/router'
import { Info } from '@styled-icons/material-outlined'

import { Base } from 'templates'
import {
  Heading,
  CartList,
  CartItem,
  PaymentOptions,
  PaymentOptionCard,
  ShowcaseProps,
  Showcase,
  Empty
} from 'components'

import * as S from './Cart.styles'

export type CartProps = {
  cartItems?: CartItem[]
  paymentOptionsCards: PaymentOptionCard[]
  recommendedGames: ShowcaseProps
}

export const Cart = ({
  cartItems,
  paymentOptionsCards,
  recommendedGames
}: CartProps) => {
  const router = useRouter()

  const handlePayment = React.useCallback(() => {
    console.log('handlePayment')
  }, [])

  return (
    <Base>
      <S.Content>
        <Heading lineLeft lineColor="secondary" color="white">
          My Cart
        </Heading>

        <S.Info>
          {!cartItems?.length ? (
            <Empty
              title="Your cart is empty"
              description="Your selected items will appear here"
              buttonLabel="Buy now"
              onButtonClick={() => router.push('/')}
            />
          ) : (
            <>
              <CartList items={cartItems} />
              <PaymentOptions
                cards={paymentOptionsCards}
                handlePayment={handlePayment}
              />
            </>
          )}
        </S.Info>

        <S.Disclamer>
          <p>
            <Info size={16} />
            Your purchase is protected by a secure connection from the WON
            platform. By purchasing from our store you agree and agree to our{' '}
            <span>terms of use</span>. <br />
            After making the purchase you are entitled to a refund within a
            maximum of 30 days, without any additional cost, as long as the
            download of the purchased game has not occurred after your purchase.
          </p>
        </S.Disclamer>

        <S.CartDivider />
      </S.Content>
      <Showcase {...recommendedGames} />
    </Base>
  )
}

export default Cart
