import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';

const MovieDetails = () => {
  const { movieDetails } = useContext(MovieContext);
  
  return(
    <div className="">
      {
        movieDetails &&
          <div className="movie-details" style={{background: `url(${movieDetails.Poster})`}}>
            <div className="card-cover">
              <div className="details">
                <h1 className="movie-title">{movieDetails.Title} ({movieDetails.Year})</h1>
                <p className="movie-type">{movieDetails.Genre}</p>
                <p className="text">{movieDetails.Runtime}</p>
                <div className="plot">{movieDetails.Plot}</div>
                <p className="text">Actors: {movieDetails.Actors}</p>
                <p className="text">Director: {movieDetails.Director}</p>
              </div>
              <div className="movie-card">
                <img src={movieDetails.Poster} alt={`${movieDetails.Title} cards`} />
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default MovieDetails;