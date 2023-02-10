import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import './index.css';

export default class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <>
        <Header />
        <main>
          <div className="text-green flex gap-8">
            <img src="./assets/images/back.png" alt="icone de voltar" />
            <div>Voltar</div>
          </div>
          { cart.length < 1 ? (
            <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
          ) : (
            <div className="flex container">
              <div className="bg-white cart-products">
                <div
                  className="text-xl font-bold cart-products--desc text-center"
                >
                  Carrinho de Compras
                </div>
                {cart.map((product) => (
                  <div
                    className="flex justify-between cart-products--item"
                    key={ product.id }
                  >
                    <span>X</span>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p data-testid="shopping-cart-product-name">{product.title}</p>
                    <div>
                      <span>-</span>
                      <span
                        data-testid="shopping-cart-product-quantity"
                      >
                        {product.quantity}
                      </span>
                      <span>+</span>
                    </div>
                    <div>
                      R$
                      {product.price}
                    </div>
                  </div>
                ))}

              </div>
              <div
                className="bg-white cart-buy flex flex-col justify-center items-center"
              >
                <div className="font-bold text-xl">Valor total da compra</div>
                <div className="font-bold">R$ 1000</div>
                <button className="bg-green">Finalizar compra</button>
              </div>
            </div>
          )}
        </main>
      </>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
}.isRequired;
