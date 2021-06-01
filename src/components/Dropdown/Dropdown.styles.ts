import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: ${theme.spacings.small};
  `};
`

type ContentProps = {
  isOpen?: boolean
}

const contentModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-1rem);
  `
}

export const Content = styled.div<ContentProps>`
  ${({ theme, isOpen = false }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    position: absolute;
    margin-top: ${theme.spacings.small};
    right: 0;
    transition: transform 0.2s ease-in-out, opacity ${theme.transition.default};

    ${isOpen ? contentModifiers.open() : contentModifiers.close()};

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 2.4rem;
    }
  `};
`
