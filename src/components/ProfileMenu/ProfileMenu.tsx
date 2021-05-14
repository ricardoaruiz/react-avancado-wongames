import React from 'react'
import Link from 'next/link'

import {
  AccountCircle,
  CreditCard,
  List,
  ExitToApp
} from '@styled-icons/material-outlined'

import * as S from './ProfileMenu.styles'

type ItemMenu = {
  label: string
  href: string
  icon: React.ReactNode
}

const iconSize = 20
const itemsMenu: ItemMenu[] = [
  {
    label: 'My profile',
    href: '/profile/me',
    icon: (
      <AccountCircle
        role="image"
        aria-label="my profile"
        aria-hidden="false"
        size={iconSize}
      />
    )
  },
  {
    label: 'My cards',
    href: '/profile/cards',
    icon: (
      <CreditCard
        role="image"
        aria-label="my cards"
        aria-hidden="false"
        size={iconSize}
      />
    )
  },
  {
    label: 'My orders',
    href: '/profile/orders',
    icon: (
      <List
        role="image"
        aria-label="my orders"
        aria-hidden="false"
        size={iconSize}
      />
    )
  },
  {
    label: 'Sign out',
    href: '/sign-in',
    icon: (
      <ExitToApp
        role="image"
        aria-label="sign out"
        aria-hidden="false"
        size={iconSize}
      />
    )
  }
]

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

export const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      {itemsMenu.map(({ label, href, icon }) => (
        <Link href={href} key={href} passHref>
          <S.Link isActive={activeLink === href} title={label}>
            {icon}
            <S.MenuItemLabel>{label}</S.MenuItemLabel>
          </S.Link>
        </Link>
      ))}
    </S.Nav>
  )
}

export default ProfileMenu
