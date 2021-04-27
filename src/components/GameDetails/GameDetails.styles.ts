import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `};
`

export const Infos = styled.section`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
        grid-template-columns: repeat(3, 1fr);
    `}

    ${media.greaterThan('large')`
        grid-template-columns: repeat(6, 1fr);
    `}
  `};
`

export const Info = styled.div``

export const Title = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const PlatformIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    & svg {
      color: ${theme.colors.white};
      width: 2.2rem;

      & + svg {
        margin-left: 2rem;
      }
    }
  `};
`
