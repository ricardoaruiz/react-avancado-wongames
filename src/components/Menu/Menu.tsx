import React from 'react'
import Link from 'next/link'

import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Search as SearchIcon } from '@styled-icons/material/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import {
  Logo,
  Button,
  MediaMatch,
  CartDropdown,
  UserDropdown
} from 'components'

import * as S from './Menu.styles'
import { CartIcon } from 'components/CartIcon'

export type MenuProps = {
  username?: string
}

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuDesk>
          <S.MenuNav>
            <Link href="/" passHref>
              <S.MenuLink>Home</S.MenuLink>
            </Link>
            <Link href="/games" passHref>
              <S.MenuLink href="#">Explore</S.MenuLink>
            </Link>
          </S.MenuNav>
        </S.MenuDesk>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          <CartDropdown items={[]} />
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <Link href="/cart" passHref>
            <a>
              <CartIcon />
            </a>
          </Link>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button size="small">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown userName={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link href="/">
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink href="#">Explore</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <S.MenuLink href="/profile/me">My account</S.MenuLink>
              <S.MenuLink href="/wishlist">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button as="a" fullWidth size="large">
                Log in now
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign up">Sign up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
