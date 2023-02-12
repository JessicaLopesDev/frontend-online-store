import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default class Routes extends Component {
  state = {
    cart: [],
  };

  saveProductsLocalStorage = (product) => {
    const products = JSON.parse(localStorage.getItem('@products'));

    if (products) {
      localStorage.setItem('@products', JSON.stringify([...products, product]));
    } else {
      localStorage.setItem('@products', JSON.stringify([product]));
    }
  };

  addToCart = (product) => {
    this.saveProductsLocalStorage(product);

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
        <Route
          path="/product-details/:id"
          render={ () => <ProductDetails addToCart={ this.addToCart } /> }
        />
      </Switch>
    );
  }
}
