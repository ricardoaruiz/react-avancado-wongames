import React from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCart as ShoppintCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { Logo, Button, MediaMatch } from 'components'

import * as S from './Menu.styles'

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
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuDesk>
          <S.MenuNav>
            <S.MenuLink href="#">Home</S.MenuLink>
            <S.MenuLink href="#">Explore</S.MenuLink>
          </S.MenuNav>
        </S.MenuDesk>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppintCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button size="small">Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign up">
              Sign up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
