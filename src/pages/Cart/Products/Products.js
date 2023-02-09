import React, { Component } from 'react';
import './index.css';

export default class Products extends Component {
  render() {
    return (
      <div className="flex justify-between cart-products--item">
        <span>X</span>
        <span>imagem</span>
        <span>Nome do produto</span>
        <div>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <div>R$ 2500,00</div>
      </div>
    );
  }
}
