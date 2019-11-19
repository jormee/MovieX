import React, { useContext } from 'react';

import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from './MovieCard';

const Viewport = () => {
  const { movies } = useContext(MovieContext);
  return(
    <div>
      <div className='container grid-container'>
        {
          movies.length
          ? movies.map(movie => {
            return(
              <div className="movie" key={movie.imdbID}>
                <MovieCard key={`front-${movie.imdbID}`} movie={movie} />
              </div>
            )
          }) 
          : <h3>Welcome, Enter the title of the movie you would like to review in the search box.</h3>
        }
      </div>
    </div>
  )
}

export default Viewport;