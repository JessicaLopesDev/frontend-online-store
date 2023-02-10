import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from '../Form/Star/Star';
import './index.css';

export default class Review extends Component {
  render() {
    const { review } = this.props;
    return (
      <>
        <div className="flex gap-18">
          <div className="font-bold">{review.email}</div>
          <div><Star rating={ review.rating } disabled /></div>
        </div>
        <div>
          {review.message}
        </div>
      </>
    );
  }
}

Review.propTypes = {
  review: PropTypes.obj,
}.isRequired;
