import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovie = moviesList.filter(movie => movie.categoryId === 'ACTION')

  const comedyMovie = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  return (
    <div className="box1">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="box2">
        <h1 className="head">Action Movies</h1>
        <MovieSlider moviesList={actionMovie} />
        <h1 className="head">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMovie} />
      </div>
    </div>
  )
}

export default PrimeVideo
