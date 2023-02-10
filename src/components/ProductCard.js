import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { addToCart } = this.props;
    const { product, onClickProduct } = this.props;
    return (
      <div>
        <button data-testid="product" onClick={ onClickProduct }>
          <h3 data-testid="product-detail-link">
            { product.title }
          </h3>
          <img src={ product.thumbnail } alt={ product.title } />
          <h4>{ product.price }</h4>
        </button>
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
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  onClickProduct: PropTypes.func.isRequired,
};
