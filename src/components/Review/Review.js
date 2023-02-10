import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from '../Form/Star/Star';
import './index.css';

export default class Review extends Component {
  render() {
    const { review } = this.props;
    return (
      <div>
        <div className="flex gap-18">
          <div className="font-bold" data-testid="review-card-email">{review.email}</div>
          <div><Star rating={ review.rating } disabled review /></div>
        </div>
        <div data-testid="review-card-evaluation">
          {review.text}
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.obj,
}.isRequired;
