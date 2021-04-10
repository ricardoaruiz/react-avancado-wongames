import React from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCart as ShoppintCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material/Search'

import { Logo } from 'components'

import * as S from './Menu.styles'

export const Menu = () => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open menu" />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppintCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>
    </S.Wrapper>
  )
}

export default Menu
