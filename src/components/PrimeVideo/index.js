// Write your code here
import {AppContainer, Image, MoviesContainer, Heading} from './styledComponents'
import MovieSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovies => eachMovies.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovies => eachMovies.categoryId === 'COMEDY',
  )

  return (
    <AppContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <Heading>Action Movies</Heading>
        <MovieSlider moviesList={actionMovies} />
        <Heading>Comedy Movies</Heading>
        <MovieSlider moviesList={comedyMovies} />
      </MoviesContainer>
    </AppContainer>
  )
}
export default PrimeVideo
