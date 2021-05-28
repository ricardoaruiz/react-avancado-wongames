import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components'

export const Main = styled(Container)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: ;

    ${media.greaterThan('medium')`
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `};
`
export const ShowMore = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.white};

    & svg {
      color: ${theme.colors.primary};
    }
  `};
`
