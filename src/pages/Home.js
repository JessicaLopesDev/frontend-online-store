import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';

export default class Home extends Component {
  state = {
    list: [],
    search: '',
    done: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { search } = this.state;
    const products = await getProductsFromCategoryAndQuery(search);
    this.setState({
      list: products.results,
      done: true,
    });
  };

  render() {
    const { list, search, done } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          name="search"
          type="text"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <Header />
        <Categories />
        { !list.length && search === ''
          ? (
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          ) : (
            <div>teste</div>
          )}

        { list.length === 0 && done === true && <h3>Nenhum produto foi encontrado</h3> }
        { list.map((product, index) => (
          <ProductCard product={ product } key={ index } />
        ))}
      </div>
    );
  }
}
