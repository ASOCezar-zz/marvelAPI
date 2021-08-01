import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './templates/Home/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Favorites } from './templates/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';

ReactDOM.render(
  <BrowserRouter>
    <FavoritesProvider>
      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </FavoritesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
