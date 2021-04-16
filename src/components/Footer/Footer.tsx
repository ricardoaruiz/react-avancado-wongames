import Link from 'next/link'
import { Logo, Heading } from 'components'

import React from 'react'
import * as S from './Footer.styles'

export const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />

      <S.Content>
        {/* CONTACT */}
        <S.Column>
          <Heading size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>

          <S.Infos>
            <a
              href="mailto:suporte@wongames.gg"
              aria-label="link para envio de email para suporte@wongames.gg"
            >
              suporte@wongames.gg
            </a>
            <a
              href="tel:+552133283719"
              aria-label="link para ligar para o telefone 55 21 33283719"
            >
              +55 21 33283719
            </a>
          </S.Infos>
        </S.Column>

        {/* FOLLOW US */}
        <S.Column>
          <Heading size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>

          <S.Infos>
            <a
              href="http://instagram.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="http://twitter.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="http://youtube.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="http://facebook.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </S.Infos>
        </S.Column>

        {/* LINKS */}
        <S.Column>
          <Heading size="small" lineBottom lineColor="secondary">
            Links
          </Heading>

          <S.Infos>
            <Link href="/">Loja</Link>
            <Link href="/games">Explorar</Link>
            <Link href="/search">Buscar</Link>
            <Link href="/faq">FAQ</Link>
          </S.Infos>
        </S.Column>

        {/* LOCATION  */}
        <S.Column>
          <Heading size="small" lineBottom lineColor="secondary">
            Location
          </Heading>

          <S.Infos>
            <span>Rua 7 de Maio</span>
            <span>527 - 89020330</span>
            <span>Rio de Janeiro, Brasil</span>
          </S.Infos>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
