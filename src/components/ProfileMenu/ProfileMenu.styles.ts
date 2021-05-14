import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    list-style: none;
    background-color: ${theme.colors.white};
    border: 0;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      flex-direction: column;
      padding: 0;
      border: 0;
    `}
  `};
`
const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  `,
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive = false }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: ${theme.spacings.xsmall};

    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    transition: 0.3s;

    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};

    ${media.greaterThan('medium')`
        justify-content: flex-start;
        padding: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};

        & + a {
          border-top: 1px solid ${theme.colors.lightGray};
        }
    `}

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `};
`

export const MenuItemLabel = styled.p`
  ${({ theme }) => css`
    display: none;

    ${media.greaterThan('medium')`
      display: block;
      margin-left: ${theme.spacings.xsmall};
    `}
  `};
`
