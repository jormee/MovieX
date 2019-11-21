import React, { useContext } from 'react';

import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

const Viewport = () => {
  const { movies, movieDetails, getMovieDetails } = useContext(MovieContext);

  return(
    <div className='view-port'>
      <div className='cover'>
        <div className="result">
          {movieDetails.Title && <MovieDetails />}
        </div>
        <div className='container grid-container'>
          {
            movies.length
            ? movies.map(movie => {
              return(
                <div className="movie" key={movie.imdbID}>
                  <MovieCard 
                    key={`front-${movie.imdbID}`} 
                    movie={movie}
                    getMovieDetails={getMovieDetails}
                  />
                </div>
              )
            }) 
            : <h3>Welcome, Enter the title of the movie you would like to review in the search box.</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default Viewport;