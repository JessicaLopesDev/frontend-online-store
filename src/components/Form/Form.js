import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Review from '../Review/Review';
import Star from './Star/Star';

export default class Form extends Component {
  state = {
    rating: 0,
    email: '',
    text: '',
    error: false,
    reviews: [],
  };

  componentDidMount() {
    const { productId } = this.props;
    const local = localStorage[productId];
    if (local) {
      const reviews = JSON.parse(local);
      this.setState({ reviews });
    }
  }

  addLocalStorage = () => {
    this.setState({ rating: 0, email: '', text: '', error: false });
    const { productId } = this.props;
    const { reviews } = this.state;
    localStorage[productId] = JSON.stringify(reviews);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { rating, email, text, reviews } = this.state;
    if (rating !== 0 && email) {
      this.setState({
        reviews: [...reviews, { rating, email, text }],
      }, this.addLocalStorage);
    } else {
      this.setState({ error: true });
    }
  };

  handleRating = (value) => {
    this.setState({ rating: value });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { rating, email, text, error, reviews } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div>Avaliações</div>
          <div className="flex">
            <input
              name="email"
              type="email"
              data-testid="product-detail-email"
              value={ email }
              onChange={ this.handleChange }
            />
            <Star rating={ rating } handleRating={ this.handleRating } />
          </div>
          <textarea
            data-testid="product-detail-evaluation"
            name="text"
            value={ text }
            onChange={ this.handleChange }
          />
          <button data-testid="submit-review-btn">Avaliar</button>
          {error && <p data-testid="error-msg">Campos inválidos</p>}
        </form>
        {reviews.length > 0
          && reviews.map((review, i) => <Review key={ i } review={ review } />)}
      </div>
    );
  }
}

Form.propTypes = {
  productId: PropTypes.string,
}.isRequired;
