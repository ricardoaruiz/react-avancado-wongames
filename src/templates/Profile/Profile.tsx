import React from 'react'
import { useRouter } from 'next/router'

import { Base } from 'templates/Base'
import { Container, Heading, ProfileMenu } from 'components'

import * as S from './Profile.styles'

export type ProfileProps = {
  children: React.ReactNode
}

export const Profile = ({ children }: ProfileProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white" size="small">
          My account
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
