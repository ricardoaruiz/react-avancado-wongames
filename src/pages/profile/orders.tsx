import React from 'react'
import { GetServerSideProps } from 'next'

import { Profile } from 'templates/Profile'
import { OrdersList, OrdersListProps } from 'components/OrdersList'
import items from 'components/OrdersList/mock'

const OrdersPage = ({ items }: OrdersListProps) => {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps<OrdersListProps> = async () => {
  return {
    props: {
      items
    }
  }
}

export default OrdersPage
