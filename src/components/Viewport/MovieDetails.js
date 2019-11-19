import React, { useContext, useEffect } from 'react';
import { MovieContext } from '../../contexts/MovieContext';

const MovieDetails = props => {
  const { movies, movieDetails, getMovieDetails } = useContext(MovieContext);

  useEffect(() => {
    getMovieDetails(props.match.params.movie_id)
  }, [])
  
  return(
    <div className="container">
      {
        movieDetails
        ? <div className="movie-details" style={{background: `url(${movieDetails.Poster})`}}>
            <div className="card-cover">
              <div className="details">
                <h1 className="movie-title">{movieDetails.Title} ({movieDetails.Year})</h1>
                <p className="movie-type">{movieDetails.Genre}</p>
                <p className="text">{movieDetails.Runtime}</p>
                <div className="plot"><p className="text">{movieDetails.Plot}</p></div>
                <p className="text">Actors: {movieDetails.Actors}</p>
                <p className="text">Director: {movieDetails.Director}</p>
              </div>
              <div className="movie-card">
                <img src={movieDetails.Poster} alt={`${movieDetails.Title} cards`} />
              </div>
            </div>
          </div>
        : <h3>Error</h3>
      }
      <hr />
      <div>
        <ul>
          {
            movies.filter(movie => movie.imdbID !== props.match.param.movie_id).map(movie => <li key={movie.imdbID}>{movie.Title}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default MovieDetails;

// Genre, Year, Runtime, Director, Actors, Ratings, Plot, Type