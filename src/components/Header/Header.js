import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import PropTypes from 'prop-types';

export default class Header extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleInput } = this.props;
    const { search } = this.state;
    return (
      <header className="flex items-center justify-between bg-blue text-white">
        <input
          data-testid="query-input"
          name="search"
          type="text"
          className="header-search"
          placeholder="Digite o que você busca"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => handleInput(search) }
        >
          Buscar
        </button>
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

Header.propTypes = {
  handleInput: PropTypes.func,
}.isRequired;
