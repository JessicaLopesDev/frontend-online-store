import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default class Routes extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const local = localStorage.getItem('@products');
    if (local) {
      this.setState({ cart: JSON.parse(local) });
    }
  }

  addToCart = (newProduct, quantity = 1) => {
    const { cart } = this.state;
    const productInCart = cart.some((product) => product.id === newProduct.id);
    if (productInCart) {
      const oldProduct = cart.find((product) => product.id === newProduct.id);
      oldProduct.quantity += Number(quantity);
      const newList = cart.filter((product) => product !== oldProduct);
      this.setState({ cart: [...newList, oldProduct] }, this.addLocalStorage);
    } else {
      newProduct.quantity = quantity;
      this.setState({ cart: [...cart, newProduct] }, this.addLocalStorage);
    }
  };

  addLocalStorage = () => {
    const { cart } = this.state;
    localStorage.setItem('@products', JSON.stringify(cart));
  };

  removeItem = (oldProduct) => {
    const { cart } = this.state;
    const newList = cart.filter((product) => product.id !== oldProduct.id);

    this.setState({ cart: [...newList] }, this.removeLocalStorage);
  };

  removeLocalStorage = () => {
    const { cart } = this.state;
    localStorage.setItem('@products', JSON.stringify(cart));
  };

  render() {
    const { cart } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
        <Route
          path="/cart"
          render={ () => <Cart cart={ cart } removeItem={ this.removeItem } /> }
        />
        <Route
          path="/product-details/:id"
          render={ () => <ProductDetails addToCart={ this.addToCart } /> }
        />
      </Switch>
    );
  }
}
