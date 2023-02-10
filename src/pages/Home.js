import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';

export default class Home extends Component {
  state = {
    list: [],
    done: false,
  };

  handleClick = async (search) => {
    const products = await getProductsFromCategoryAndQuery(search);
    this.setState({
      list: products.results,
      done: true,
    });
  };

  render() {
    const { list, done } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <Header handleClick={ this.handleClick } />
        <main className="flex">
          <Categories handleClick={ this.handleClick } />
          { list.length < 1 && !done
            ? (
              <h3 data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h3>
            ) : (
              <div>
                {list.length < 1 ? (
                  <div>Nenhum produto foi encontrado</div>
                ) : (
                  <div>
                    { list.map((product) => (
                      <ProductCard
                        product={ product }
                        key={ product.id }
                        addToCart={ addToCart }
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func,
}.isRequired;
