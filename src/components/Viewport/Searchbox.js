import React, {useContext, useState} from 'react';

import { MovieContext } from '../../contexts/MovieContext';

const Searchbox = () => {

  const { searchMovie } = useContext(MovieContext);
  const [title, setTitle] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    searchMovie(title);
    setTitle('');
  }

  const handleChange = event => {
    setTitle(event.target.value);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Search for a movie</label>
      <input className='movie-search' autoFocus={true} autoComplete='off' type='text' name='title' onChange={handleChange} value={title} />
      <i className='fas fa-search'></i>
    </form>
  )

}

export default Searchbox;