import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './templates/Home/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Favorites } from './templates/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { CharsProvider } from './contexts/CharsProvider/index';

ReactDOM.render(
  <BrowserRouter>
    <FavoritesProvider>
      <CharsProvider>
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/" component={Home} exact />
        </Switch>
      </CharsProvider>
    </FavoritesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
