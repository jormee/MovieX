
const MovieReducer = (state, action) => {
  switch(action.type){
    case 'ADD_MOVIE':
      const {
        Actors, Awards, Country,
        imdbID, Title, Genre, 
        Year, Website, Plot, 
        Poster, Rated, Director, 
        Ratings, Runtime, Type
      } = action.data;
      
      return [...state, {
        Actors, Awards, Country,
        id: imdbID, Title, Genre, 
        Year, Website, Plot, 
        Poster, Rated, Director, 
        Ratings, Runtime, Type
      }];
      
    case 'REMOVE_MOVIE':
      return state.filter(id => action.data.imdbID !== id);
      
    default:
      return state;
  }
}

export default MovieReducer;