import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

import { getProductDetails } from '../../services/api';
import Form from '../../components/Form/Form';

export default class ProductDetails extends Component {
  state = {
    product: null,
    quantity: 1,
  };

  componentDidMount() {
    this.handleGetProduct();
  }

  handleGetProduct = async () => {
    const productId = localStorage.getItem('@product-id');

    if (productId) {
      const product = await getProductDetails(productId);
      this.setState({ product });
    }
  };

  addQuantity = () => {
    console.log('mais');
    const { product, quantity } = this.state;
    if (quantity < product.available_quantity) {
      this.setState({ quantity: quantity + 1 }, this.ver);
    }
  };

  subQuantity = () => {
    console.log('menos');
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 }, this.ver);
    }
  };

  ver = () => {
    const { quantity } = this.state;
    console.log(quantity);
  };

  render() {
    const { product, quantity } = this.state;
    const { addToCart } = this.props;

    return (
      <div>
        <Header />
        {
          product && (
            <main>
              <div className="flex justify-between cart-products--item">
                <section>
                  <h3
                    data-testid="product-detail-name"
                  >
                    { product.title }
                  </h3>
                  <img
                    data-testid="product-detail-image"
                    src={ product.thumbnail }
                    alt={ product.title }
                  />
                  { product.shipping.free_shipping
                    && (
                      <img
                        data-testid="free-shipping"
                        src="/assets/images/entrega-gratis.png"
                        alt="frete gratis"
                        width="25px"
                      />
                    ) }
                </section>

                <section>
                  <h3>
                    Especificações técnicas
                  </h3>
                  <div>
                    <button
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ this.subQuantity }
                    >
                      -
                    </button>
                    <span>{ quantity }</span>
                    <button
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={ this.addQuantity }
                    >
                      +
                    </button>
                  </div>
                  <h3 data-testid="product-detail-price">
                    {`R$ ${product.price}`}
                  </h3>
                  <button
                    type="button"
                    onClick={ () => addToCart(product, quantity) }
                    data-testid="product-detail-add-to-cart"
                  >
                    Adicionar ao carrinho
                  </button>
                </section>
              </div>
              <Form productId={ product.id } />
            </main>
          )
        }
      </div>
    );
  }
}

ProductDetails.propTypes = {
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     id: PropTypes.string,
  //   }),
  // }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

// ProductDetails.defaultProps = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: '',
//     }),
//   }),
// };
