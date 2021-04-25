import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as ButtonStyles from 'components/Button/Button.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 3.5rem 2.5rem;
    background-color: ${theme.colors.white};

    ${HeadingStyles.Wrapper} {
      max-width: 14rem;
      word-wrap: break-word;

      ${media.greaterThan('medium')`
        max-width: 60rem;
        word-wrap: break-word;
      `}
    }
  `};
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};
  `};
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    max-width: 77.5rem;

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.large}
    `}
  `};
`

export const Price = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -1.2rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    padding: 0.5rem 1rem;
    background-color ${theme.colors.secondary};
    border-radius: ${theme.border.radius};

    ${media.greaterThan('medium')`
        right: 2.5rem;
        font-size: 2.2rem;
    `}

  `};
`

export const ButtonContaier = styled.div`
  ${({ theme }) => css`
    ${ButtonStyles.Wrapper} {
      width: 100%;
      font-size: ${theme.font.sizes.small};

      & + button {
        margin-top: ${theme.spacings.small};
      }
    }

    ${media.greaterThan('medium')`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row-reverse;

        ${ButtonStyles.Wrapper} {
            width: auto;
            font-size: ${theme.font.sizes.medium};
            
            & + button {
                margin-top: 0;
                margin-right: 2rem;
            }
        }
    `}
  `};
`
