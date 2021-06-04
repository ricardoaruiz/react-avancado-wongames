import React from 'react'
import { useRouter } from 'next/router'

import { Base } from 'templates'
import { Container, Empty } from 'components'

export const Page404 = () => {
  const router = useRouter()

  return (
    <Base>
      <Container>
        <Empty
          title="404 Not found"
          description="Ops... this page does not exist. Go back to the store and enjoy our offers"
          buttonLabel="Go Home"
          onButtonClick={() => router.push('/')}
        />
      </Container>
    </Base>
  )
}

export default Page404
