import { Container, Footer, Heading, Menu } from 'components'
import React from 'react'
import * as S from './Home.styles'

export const Home = () => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Most popular
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Free games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </S.Wrapper>
  )
}

export default Home
