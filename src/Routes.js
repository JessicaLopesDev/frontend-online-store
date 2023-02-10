import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/product-details/:id" component={ ProductDetails } />
      </Switch>
    );
  }
}
