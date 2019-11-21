import React, { useContext } from 'react';

import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import Searchbox from './Searchbox';

const Viewport = () => {
  const { movies, movieDetails, getMovieDetails } = useContext(MovieContext);

  return(
    <div className='view-port'>
      <div className='cover'>
        <div className="result">
          {movieDetails.Title && <MovieDetails />}
        </div>
        <div className='container'>
          <div className="search">
            <Searchbox />
          </div>
          <div className="grid-container">
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
              : <h3>Welcome to MovieX, Enter the title of the movie you would like to review in the search box.</h3>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewport;