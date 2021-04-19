import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as TextStyles from 'components/TextField/TextField.styles'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as ButtonStyles from 'components/Button/Button.styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `};
`

export const BannerBlock = styled.section`
  display: none;
  position: relative;
  background: url('/img/auth-image.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;

  ${media.greaterThan('medium')`
    display: block;
  `}

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(3, 5, 23, 0.85);
  }
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 5.5rem 5.5rem 2.5rem 5.5rem;
    z-index: ${theme.layers.base};
  `};
`

export const Infos = styled.div`
  max-width: 64.6rem;
  margin-top: -5rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 5rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    line-height: 1;
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    margin-top: 1rem;
    font-size: 2.6rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    line-height: 1.2;
    max-width: 50rem;

    & strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const Copyright = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: 1.2rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
  `};
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 36.6rem;
    padding: 0 ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      font-size: 2.4rem;
      margin-top: 9rem;
      margin-bottom: 3rem;
    }

    ${TextStyles.Wrapper} {
      margin-bottom: 1rem;
    }

    ${ButtonStyles.Wrapper} {
      margin-top: 4rem;
      margin-bottom: 1rem;
    }

    & > a:first-of-type {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      text-align: right;
      text-decoration: none;
      color: ${theme.colors.black};
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      text-align: center;

      & a {
        color: ${theme.colors.secondary};
      }
    }

    ${media.greaterThan('medium')`
      width: 38rem;

      ${HeadingStyles.Wrapper} {
        margin-top: 6rem;
        font-size: 2.6rem;
      }
    `}
  `};
`
