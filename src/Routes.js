import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default class Routes extends Component {
  state = {
    cart: [],
  };

  addToCart = (product) => {
    console.log(product);
    const { cart } = this.state;
    if (cart.includes(product)) {
      const newProduct = cart.find((oldProduct) => oldProduct === product);
      newProduct.quantity += 1;
      const newList = cart.filter((oldProduct) => oldProduct !== product);
      this.setState({ cart: [...newList, newProduct] });
    } else {
      product.quantity = 1;
      this.setState({ cart: [...cart, product] });
    }
  };

  render() {
    const { cart } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
        <Route path="/cart" render={ () => <Cart cart={ cart } /> } />
        <Route path="/product-details/:id" component={ ProductDetails } />
      </Switch>
    );
  }
}
