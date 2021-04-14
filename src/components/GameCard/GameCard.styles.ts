import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import * as ButtonStyles from 'components/Button/Button.styles'
import * as RibbonStyles from 'components/Ribbon/Ribbon.styles'
import { GameCardProps } from './GameCard'

const wrapperModifiers = {
  withBorderRadius: (theme: DefaultTheme) => css`
    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
  `
}

type WrapperProps = Pick<GameCardProps, 'withBorderRadius'>

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, withBorderRadius }) => css`
    position: relative;
    max-width: 29.2rem;
    background-color: ${theme.colors.white};

    ${withBorderRadius && wrapperModifiers.withBorderRadius(theme)};

    ${RibbonStyles.Wrapper} {
      background-color: #ff5f5f;
      text-transform: uppercase;

      &::after {
        border-top-color: ${darken(0.5, '#ff5f5f')};
        border-left-color: ${darken(0.5, '#ff5f5f')};
      }
    }
  `};
`

export const ImageBox = styled.div`
  width: 100%;
  height: 13.7rem;
`

export const Image = styled.img``

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall} 0;
  `};
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `};
`

export const Developer = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
  `};
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    & svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const Favorite = styled.img`
  align-self: flex-start;
`
type PriceProps = {
  hasOfferPrice: boolean
}

export const BuyBox = styled.div<PriceProps>`
  ${({ theme, hasOfferPrice }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: ${hasOfferPrice ? theme.spacings.xsmall : '0.4rem'}
      ${theme.spacings.xsmall} ${theme.spacings.xsmall};

    ${ButtonStyles.Wrapper} {
      background: unset;
      background-color: ${theme.colors.secondary};
      height: 2.5rem;
      max-width: 8rem;

      & + button {
        margin-left: 0.3rem;
      }

      & svg {
        margin: 0;
      }
    }
  `};
`

export const NormalPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.small};
  `};
`
