import { Heading, Logo } from 'components'
import Link from 'next/link'
import React from 'react'
import * as S from './Auth.styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

export const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <a>
              <Logo size="normal" color="white" id="banner" />
            </a>
          </Link>

          <S.Infos>
            <Heading size="hudge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </S.Infos>

          <S.Copyright>
            Won Games 2020 © Todos os Direitos Reservados
          </S.Copyright>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <Link href="/">
          <a>
            <Logo color="black" id="content" />
          </a>
        </Link>
        <S.ContentWrapper>
          <Heading lineLeft lineColor="secondary" size="small">
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
