import { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  state = {
    quantity: 1,
  };

  componentDidMount() {
    const { product } = this.props;
    this.setState({ quantity: product.quantity });
  }

  addQuantity = () => {
    const { product, handleChange } = this.props;
    const { quantity } = this.state;
    if (quantity < product.available_quantity) {
      this.setState({ quantity: quantity + 1 }, handleChange);
    }
  };

  subQuantity = () => {
    const { quantity } = this.state;
    const { handleChange } = this.props;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 }, handleChange);
    }
  };

  render() {
    const { product, removeItem } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="remove-product"
          onClick={ () => removeItem(product) }
        >
          Excluir
        </button>
        <img src={ product.thumbnail } alt={ product.title } />
        <span data-testid="shopping-cart-product-name">{ product.title }</span>
        <div>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.addQuantity }
          >
            +
          </button>
          <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.subQuantity }
          >
            -
          </button>
        </div>
        <h3>{ `R$ ${product.price * quantity}` }</h3>
      </div>
    );
  }
}

export default CartItem;

CartItem.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    available_quantity: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  // quantity: PropTypes.number.isRequired,
};
