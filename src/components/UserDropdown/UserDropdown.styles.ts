import styled, { css } from 'styled-components'

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};

    & span {
      margin: ${theme.spacings.xxsmall};
    }
  `};
`
export const Nav = styled.nav``

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    color: ${theme.colors.black};
    transition: all ${theme.transition.default};

    & svg {
      width: 2rem;
      margin-right: ${theme.spacings.xsmall};
      color: ${theme.colors.black};
      transition: all ${theme.transition.default};
    }

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      & svg {
        color: ${theme.colors.white};
      }
    }

    & + a {
      border-top: 1px solid ${theme.colors.lightGray};
    }
  `};
`
