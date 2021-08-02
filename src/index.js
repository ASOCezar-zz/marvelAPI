import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './templates/Home/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Favorites } from './templates/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { ModalOpenProvider } from './contexts/ModalOpenProvider/';
import { CharsProvider } from './contexts/CharsProvider/index';
import { ClickedCharProvider } from './contexts/ClickedCharProvider/index';

ReactDOM.render(
  <BrowserRouter>
    <FavoritesProvider>
      <ClickedCharProvider>
        <ModalOpenProvider>
          <CharsProvider>
            <Switch>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </CharsProvider>
        </ModalOpenProvider>
      </ClickedCharProvider>
    </FavoritesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
