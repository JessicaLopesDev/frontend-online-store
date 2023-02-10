import React, { Component } from 'react';
import './index.css';
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
      const categoryNames = categories.map((item) => item.name);
      this.setState({
        categoriesList: categoryNames });
    });
  };

  render() {
    const { categoriesList } = this.state;
    return (
      <aside className="categories bg-white">
        {categoriesList.map((category) => (
          <label
            data-testid="category"
            htmlFor={ category }
            key={ category }
          >
            <input
              id={ category }
              name="category"
              type="radio"
            />
            { category }
          </label>
        ))}
      </aside>
    );
  }
}
