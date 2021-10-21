// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #000000;
  min-height: 100vh;
  padding-bottom: 32px;
`
export const MoviesContainer = styled.div`
  width: 90%;
  margin-bottom: 30px;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const Image = styled.img`
  width: 100%;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
