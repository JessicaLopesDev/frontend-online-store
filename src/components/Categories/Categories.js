import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import * as api from '../../services/api';

export default class Categories extends Component {
  state = {
    categoriesList: [],
  };

  componentDidMount() {
    this.handleGetCategories();
  }

  handleGetCategories = () => {
    api.getCategories().then((categories) => {
      this.setState({
        categoriesList: categories });
    });
  };

  render() {
    const { categoriesList } = this.state;
    const { handleCategorie } = this.props;
    return (
      <aside className="categories bg-white">
        {categoriesList.map((category) => (
          <label
            data-testid="category"
            htmlFor={ category.id }
            key={ category.id }
          >
            <input
              id={ category.id }
              name="category"
              type="radio"
              onClick={ () => handleCategorie(category.id) }
            />
            { category.name }
          </label>
        ))}
      </aside>
    );
  }
}

Categories.propTypes = {
  handleCategorie: PropTypes.func,
}.isRequired;
