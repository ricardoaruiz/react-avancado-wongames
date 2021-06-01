import React from 'react'
import * as S from './Dropdown.styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

export const Dropdown = ({ children, title }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <S.Wrapper>
      <S.Title
        role="button"
        aria-label={`toggle dropdown`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </S.Title>
      <S.Content
        isOpen={isOpen}
        aria-hidden={!isOpen}
        aria-label="drop down options"
      >
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
