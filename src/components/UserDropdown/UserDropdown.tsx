import React from 'react'
import Link from 'next/link'
import { UserCircle } from '@styled-icons/fa-regular/UserCircle'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { ExitToApp } from '@styled-icons/material-outlined/ExitToApp'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import { Dropdown } from 'components/Dropdown'

import * as S from './UserDropdown.styles'

export type UserDropdownProps = {
  userName: string
}

export const UserDropdown = ({ userName }: UserDropdownProps) => {
  const title = React.useMemo(
    () => (
      <S.TitleContainer>
        <UserCircle
          size={20}
          role="image"
          aria-label="user avatar"
          aria-hidden="false"
        />
        <span>{userName}</span>
        <ChevronDown size={20} />
      </S.TitleContainer>
    ),
    [userName]
  )

  return (
    <Dropdown title={title}>
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.Link aria-label="my account">
            <UserCircle />
            My account
          </S.Link>
        </Link>
        <Link href="/wishlist" passHref>
          <S.Link aria-label="wishlist">
            <Heart />
            Wishlist
          </S.Link>
        </Link>
        <Link href="/" passHref>
          <S.Link aria-label="sign out">
            <ExitToApp />
            Sign out
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
