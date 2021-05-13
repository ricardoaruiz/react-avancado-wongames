import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { tint } from 'polished'

import { Container, Divider } from 'components'

import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as CartListStyles from 'components/CartList/CartList.styles'

export const Content = styled(Container)`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${CartListStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `};
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${theme.spacings.xlarge};

    ${CartListStyles.Wrapper} {
      margin-right: 0;
    }

    ${media.greaterThan('medium')`
      flex-direction: row;
      align-items: flex-start;

      ${CartListStyles.Wrapper} {
        flex: 1;
        margin-right: ${theme.spacings.medium}
      }
  `}
  `};
`

export const Disclamer = styled.div`
  ${({ theme }) => css`
    color: ${tint(0.2, theme.colors.gray)};
    font-size: ${theme.font.sizes.small};

    & p {
      line-height: 1.6;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    & svg {
      color: ${theme.colors.primary};
      margin-right: ${theme.spacings.xxsmall};
    }

    & span {
      color: ${theme.colors.primary};
    }
  `};
`

export const CartDivider = styled(Divider)`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;

    ${media.greaterThan('medium')`
      margin: 7.3rem 0;
    `}
  `};
`
