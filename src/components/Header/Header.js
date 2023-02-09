import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between bg-blue text-white">
        <input
          type="text"
          className="header-search"
          placeholder="Digite o que você busca"
        />
        <div className="flex items-center gap-4">
          <div><img src="./assets/images/logo.png" alt="logomarca" /></div>
          <div className="text-center">
            <div className="text-xl font-bold">FRONT-END</div>
            <div>online store</div>
          </div>
        </div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="./assets/images/cart.png" alt="carrinho icone" />
        </Link>
      </header>
    );
  }
}
