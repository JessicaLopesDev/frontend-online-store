import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  handleSaveProductId = (productId) => {
    localStorage.setItem('@product-id', productId);
  };

  render() {
    const { addToCart, product } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/product-details/${product.id}` }
          onClick={ () => this.handleSaveProductId(product.id) }
        >
          <h3>
            { product.title }
          </h3>
          { product.shipping.free_shipping
            && (
              <img
                data-testid="free-shipping"
                src="/assets/images/entrega-gratis.png"
                alt="frete gratis"
                width="25px"
              />
            ) }
          <img src={ product.thumbnail } alt={ product.title } />
          <h4>{ product.price }</h4>
        </Link>
        <button
          type="button"
          onClick={ () => addToCart(product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({ free_shipping: PropTypes.bool }).isRequired,
  }).isRequired,
};
