import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  render() {
    const { cart } = this.state;
    return (
      <div>
        { cart.length < 1 && (
          <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        )}
      </div>
    );
  }
}
