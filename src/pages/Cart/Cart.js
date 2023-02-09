import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './index.css';
import Products from './Products/Products';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  render() {
    const { cart } = this.state;
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
                <Products />
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
