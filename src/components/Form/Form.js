import React, { Component } from 'react';
import Review from '../Review/Review';
import './index.css';
import Star from './Star/Star';

export default class Form extends Component {
  state = {
    rating: 0,
    email: '',
    message: '',
    error: false,
    reviews: [],
  };

  componentDidMount() {
    const local = localStorage.reviews;
    if (local) {
      const reviews = JSON.parse(local);
      this.setState({ reviews });
    }
  }

  addLocalStorage = () => {
    const { reviews } = this.state;
    localStorage.reviews = JSON.stringify(reviews);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { rating, email, message, reviews } = this.state;
    if (rating !== 0 && email && message) {
      this.setState({
        reviews: [...reviews, { rating, email, message }],
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
    const { rating, email, message, error, reviews } = this.state;
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
            <div>
              <Star rating={ rating } handleRating={ this.handleRating } />
            </div>
          </div>
          <textarea name="message" value={ message } onChange={ this.handleChange } />
          <button data-testid="submit-review-btn">Avaliar</button>
          {error && <p data-testid="error-msg">Campos inválidos</p>}
        </form>
        {reviews.length > 0
          && reviews.map((review, i) => <Review key={ i } review={ review } />)}
      </div>
    );
  }
}
