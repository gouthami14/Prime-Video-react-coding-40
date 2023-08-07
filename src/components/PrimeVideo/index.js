// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
const horrorMovie = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachmovie => eachmovie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    eachmovie => eachmovie.categoryId === comedyMovie,
  )

  const horrorMovieList = moviesList.filter(
    eachmovie => eachmovie.categoryId === horrorMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="image"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
        <h1 className="movies-heading">Horror Movies</h1>
        <MoviesSlider moviesList={horrorMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
