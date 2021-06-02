import styled, { css } from 'styled-components'

import * as DropdownStyles from 'components/Dropdown/Dropdown.styles'
import * as EmptyStyles from 'components/Empty/Empty.styles'

type WrapperProps = {
  isEmpty?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isEmpty = true }) => css`
    ${DropdownStyles.Content} {
      padding: ${isEmpty ? theme.spacings.xxsmall : 0};
    }
    ${EmptyStyles.Wrapper} {
      width: 30rem;
    }
    ${EmptyStyles.Description} {
      color: ${theme.colors.black};
    }
  `};
`
