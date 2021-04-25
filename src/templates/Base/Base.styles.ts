import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'

export const Wrapper = styled.main``

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    padding-bottom: 5rem;

    ${Container} {
      padding-top: 50px;
    }

    ${media.greaterThan('medium')`
      padding-top: 4rem;
      clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0 100%); 
    `}
  `};
`
