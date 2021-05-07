import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, auto));
    gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `};
`

export default Grid
