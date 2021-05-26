import styled, { css, DefaultTheme } from 'styled-components'

import { Divider } from 'components'
import * as HeadingStyles from 'components/Heading/Heading.styles'
import * as CheckboxStyles from 'components/Checkbox/Checkbox.styles'
import * as RadioStyles from 'components/Radio/Radio.styles'
import media from 'styled-media-query'

export const ExplorerDivider = styled(Divider)`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `};
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: ${theme.spacings.medium};
    z-index: ${theme.layers.modal};

    & svg {
      color: ${theme.colors.white};
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `};
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.white};
    pointer-events: none;
    z-index: ${theme.layers.overlay};
  `};
`

export const Options = styled.div`
  ${({ theme }) => css`
    position: relative;
    transform: translateY(0);
    height: calc(100vh - (${theme.spacings.medium} * 3.5));
    overflow-y: auto;
    transition: 0.2s;
    z-index: ${theme.layers.modal};

    ${media.greaterThan('medium')`
      height: 100vh;
      overflow-y: hidden;
    `}
  `};
`
export const Footer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: block;
    opacity: 1;
    height: ${theme.spacings.medium};
    padding: ${theme.spacings.xsmall} 0;
    z-index: ${theme.layers.modal};
  `};
`

type WrapperProps = {
  isOpen: boolean
}

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};

    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
    }
    ${CheckboxStyles.Wrapper}, ${RadioStyles.Wrapper} {
      & label {
        color: ${theme.colors.black};
      }
    }

    ${Overlay} {
      display: block;
    }

    ${IconWrapper} {
      & svg:first-of-type {
        visibility: hidden;
        pointer-events: none;
      }
      & svg:last-of-type {
        visibility: visible;
        pointer-events: all;
        color: ${theme.colors.black};
      }
    }

    ${Options} {
      opacity: 1;
      transform: translateY(0);
      background-color: ${theme.colors.white};
    }

    ${Footer} {
      opacity: 1;
      background-color: ${theme.colors.white};
    }

    ${media.greaterThan('medium')`
      ${Options} {
        opacity: 1;
      }
    `}
  `,
  close: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.mainBg};

    ${Overlay} {
      display: none;
    }

    ${IconWrapper} {
      & svg:first-of-type {
        visibility: visible;
        pointer-events: all;
      }
      & svg:last-of-type {
        visibility: hidden;
        pointer-events: none;
      }
    }

    ${Options} {
      opacity: 0;
      transform: translateY(3rem);
      background-color: ${theme.colors.mainBg};
    }

    ${Footer} {
      opacity: 0;
      background-color: ${theme.colors.mainBg};
    }

    ${media.greaterThan('medium')`
      ${Options} {
        opacity: 1;
      }
      ${Footer} {
        opacity: 1;
      }
    `}
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    ${HeadingStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.small};
    }
    ${CheckboxStyles.Wrapper} {
      margin-bottom: 1.2rem;
    }
    ${RadioStyles.Wrapper} {
      margin-bottom: 1.2rem;
    }

    ${isOpen ? wrapperModifiers.open(theme) : wrapperModifiers.close(theme)}
  `};
`
