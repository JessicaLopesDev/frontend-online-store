import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Star extends Component {
  render() {
    const { rating, handleRating, disabled, review } = this.props;
    const ratings = ['1', '2', '3', '4', '5'];
    return (
      <div>
        {!review
          ? (
            <div>
              {ratings.map((index) => (
                <button
                  type="button"
                  key={ index }
                  onClick={ () => handleRating(index) }
                  disabled={ disabled }
                  className="star-btn"
                >
                  <i
                    data-testid={ `${index}-rating` }
                    className={ `
                ${index <= rating ? 'fa-solid' : 'fa-regular'} fa-star` }
                  />
                </button>
              ))}
            </div>)
          : (
            <div data-testid="review-card-rating">
              {ratings.map((ratingValue) => (
                <i
                  key={ ratingValue }
                  className={
                    `${ratingValue <= rating ? 'fa-solid' : 'fa-regular'} fa-star`
                  }
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

Star.propTypes = {
  rating: PropTypes.string,
  handleRating: PropTypes.func,
}.isRequired;

Star.propTypes = {
  disabled: PropTypes.bool,
  review: PropTypes.bool,
};

Star.defaultProps = {
  disabled: false,
  review: false,
};
