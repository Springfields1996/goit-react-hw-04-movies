import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import { Movies } from './components/Movies/Movies';
import { FilmInfo } from './components/FilmInfo/FilmInfo';
// import { Nav } from './components/Nav/Nav';

export const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies/:filmId" component={FilmInfo} />
      <Route exact path="/movies" render={props => <Movies {...props} />} />
      <Route path="/" component={Home} />
    </Switch>
  </>
);
