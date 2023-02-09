import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div data-testid="product" key={ product.id }>
        <h3>{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <h4>{ product.price }</h4>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.number.isRequired,
  }).isRequired,
};
