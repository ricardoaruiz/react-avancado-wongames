import { tint } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.small} 0
      ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.large};
    }
  `};
`

export const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem;
    background-color: ${tint(0.2, theme.colors.lightGray)};
    margin-bottom: ${theme.spacings.xsmall};
  `};
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
`

export const CardImage = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
  `};
`

export const CardNumber = styled.div``

export const AddNewCardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 1.3rem;
    background-color: ${tint(0.2, theme.colors.lightGray)};
    margin-bottom: ${theme.spacings.xxlarge};
    cursor: pointer;

    & p {
      margin-left: ${theme.spacings.xsmall};
    }
  `};
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${tint(0.2, theme.colors.lightGray)};
    margin-left: -${theme.spacings.small};
    margin-right: -${theme.spacings.small};
    padding: ${theme.spacings.small};

    & a {
      margin-bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.primary};
      text-decoration: none;
      text-align: center;
    }

    ${media.greaterThan('medium')`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & a {
          margin-right: ${theme.spacings.small};
          margin-bottom: 0;
        }
      `}
  `};
`
