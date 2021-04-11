import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};

    margin-top: ${theme.spacings.medium};
    list-style: none;

    ${media.greaterThan('medium')`
        display: flex;
        justify-content: space-between;
    `}
  `}
`

export const Column = styled.li`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Infos = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Copyright = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    color: ${theme.colors.gray};

    ${media.greaterThan('medium')`
        margin-top: ${theme.spacings.xlarge};
    `}
  `}
`
