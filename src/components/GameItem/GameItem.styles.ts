import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    padding: ${theme.spacings.small};
    border-bottom: 0.1px solid ${theme.colors.lightGray};
    background-color: ${theme.colors.white};

    ${media.greaterThan('medium')`
        padding: ${theme.spacings.medium};
    `}
  `};
`
export type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 100%;
    max-width: 9.4rem;
    height: 5.6rem;

    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
        max-width: 15rem;
        height: 7rem;
    `}
  `};
`
export const Info = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `};
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
        font-size: 2rem;
        line-height: 2rem;
    `}
  `};
`
export const Price = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    padding: 0.2rem ${theme.spacings.xxsmall};
    border-radius: 0.2rem;
  `};
`
