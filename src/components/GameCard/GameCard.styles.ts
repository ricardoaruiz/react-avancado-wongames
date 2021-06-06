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
    display: flex;
    flex-direction: column;

    position: relative;
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.lightGray};

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

// Loading effect
const loadingImage = css`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const ImageBox = styled.a`
  width: 100%;
  height: 13.7rem;
  ${loadingImage}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall} 0;
  `};
`

export const Info = styled.a`
  ${({ theme }) => css`
    width: calc(100% - 2.5rem);
    word-wrap: break-word;
    text-decoration: none;
    color: ${theme.colors.black};
  `};
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    max-width: calc(100% - 2.5rem);
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
type BuyBoxProps = {
  hasPromotionPrice: boolean
}

export const BuyBox = styled.div<BuyBoxProps>`
  ${({ theme, hasPromotionPrice: hasPromotionPrice }) => css`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: ${hasPromotionPrice ? theme.spacings.xsmall : '0.4rem'}
      ${theme.spacings.xsmall} ${theme.spacings.xsmall};

    ${ButtonStyles.Wrapper} {
      height: 2.5rem;

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

const priceModifiers = {
  current: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};
    height: 2.5rem;
    margin-right: 0.4rem;
  `,
  old: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.small};
  `
}

type PriceProps = {
  type?: 'current' | 'old'
}

export const Price = styled.div<PriceProps>`
  ${({ theme, type = 'current' }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    line-height: ${theme.spacings.small};

     ${priceModifiers[type](theme)};
    }
  `};
`
