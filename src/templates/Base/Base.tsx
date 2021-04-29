import React from 'react'

import { Container, Footer, Menu } from 'components'

import * as S from './Base.styles'

export type BaseProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.SectionContent>{children}</S.SectionContent>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
