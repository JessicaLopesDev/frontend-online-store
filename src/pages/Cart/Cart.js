import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import './index.css';
import CartItem from '../../components/CartItem';

export default class Cart extends Component {
  state = {
    totalPrice: 0,
  };

  componentDidMount() {
    console.log('didMount');
    this.handleChange();
  }

  handleChange() {
    let price = 0;
    const { cart } = this.props;
    if (cart) {
      cart.forEach((product) => {
        price += (Number(product.price) * Number(product.quantity));
      });
      this.setState({ totalPrice: price });
    }
  }

  render() {
    const { cart, removeItem } = this.props;
    const { totalPrice } = this.state;

    return (
      <>
        <Header />
        <main>
          <div className="text-green flex gap-8">
            <img src="./assets/images/back.png" alt="icone de voltar" />
            <div>Voltar</div>
          </div>
          { cart && cart.length < 1 ? (
            <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
          ) : (
            <div className="flex container">
              <div className="bg-white cart-products">
                <div
                  className="text-xl font-bold cart-products--desc text-center"
                >
                  Carrinho de Compras
                </div>
                { cart && cart.map((product) => (
                  <div
                    className="flex justify-between cart-products--item"
                    key={ product.id }
                  >
                    <CartItem
                      product={ product }
                      handleChange={ this.handleChange }
                      removeItem={ removeItem }
                    />
                  </div>
                ))}
              </div>
              <div
                className="bg-white cart-buy flex flex-col justify-center items-center"
              >
                <div className="font-bold text-xl">Valor total da compra</div>
                <div className="font-bold">
                  R$
                  {totalPrice}
                </div>
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
