import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieContextProvider from './contexts/MovieContext'
import Header from './components/Header/Header';
import Viewport from './components/Viewport/Viewport';
import MovieDetails from './components/Viewport/MovieDetails';

function App() {
  return (
    <Switch>
      <MovieContextProvider>
        <Header />
        <Route exact path='/' component={Viewport} />
        <Route path='/movies/:movie_id' component={MovieDetails} />
        {/* <Footer /> */}
      </MovieContextProvider>
    </Switch>
  );
}

export default App;
