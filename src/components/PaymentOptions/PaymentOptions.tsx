import React from 'react'
import { Add, AddShoppingCart } from '@styled-icons/material-outlined'

import * as S from './PaymentOptions.styles'
import Link from 'next/link'
import { Button } from 'components/Button'
import { Radio } from 'components/Radio'
import { Heading } from 'components/Heading'

export type PaymentOptionCard = {
  img: string
  flag: string
  number: string
}

export type PaymentOptionsProps = {
  cards?: PaymentOptionCard[]
  handlePayment: () => void
}

export const PaymentOptions = ({
  cards,
  handlePayment
}: PaymentOptionsProps) => {
  const [selectedCard, setSelectedCard] = React.useState('')

  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" size="small">
        Payment
      </Heading>

      {cards?.map(({ img, flag, number }) => (
        <S.CardItem key={`card-${number}`}>
          <S.CardInfo>
            <S.CardImage src={img} role="image" aria-label={`${flag} card`} />
            <S.CardNumber>{number}</S.CardNumber>
          </S.CardInfo>
          <Radio
            name="selectedCard"
            id={number}
            value={number}
            aria-label={number}
            onCheck={() => {
              setSelectedCard(number)
            }}
          />
        </S.CardItem>
      ))}

      <S.AddNewCardContainer role="button">
        <Add size={14} />
        <p>Add a new credit card</p>
      </S.AddNewCardContainer>

      <S.Footer>
        <Link href="/" passHref>
          <a>Continue shopping</a>
        </Link>

        <Button
          onClick={handlePayment}
          icon={<AddShoppingCart />}
          disabled={!selectedCard}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
