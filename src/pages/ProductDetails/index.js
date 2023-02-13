import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

import { getProductDetails } from '../../services/api';
import Form from '../../components/Form/Form';

export default class ProductDetails extends Component {
  state = {
    product: null,
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

  render() {
    const { product } = this.state;
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
                </section>

                <section>
                  <h3>
                    Especificações técnicas
                  </h3>
                  <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <h3 data-testid="product-detail-price">
                    {`R$ ${product.price}`}
                  </h3>
                  <button
                    type="button"
                    onClick={ () => addToCart(product) }
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
