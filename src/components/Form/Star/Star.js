import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Star extends Component {
  render() {
    const { rating, handleRating, disabled } = this.props;
    const ratings = ['1', '2', '3', '4', '5'];

    return (
      <>
        {ratings.map((ratingValue) => (
          <button
            type="button"
            key={ ratingValue }
            onClick={ () => handleRating(ratingValue) }
            disabled={ disabled }
          >
            <i
              className={ `
              ${ratingValue <= rating ? 'fa-solid' : 'fa-regular'} fa-star` }
              data-testid={ `${ratingValue}-rating"` }
            />
          </button>
        ))}
      </>
    );
  }
}

Star.propTypes = {
  rating: PropTypes.string,
  handleRating: PropTypes.func,
}.isRequired;

Star.propTypes = {
  disabled: PropTypes.bool,
};

Star.defaultProps = {
  disabled: false,
};
