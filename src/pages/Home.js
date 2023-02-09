import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';

export default class Home extends Component {
  state = {
    list: [],
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <Header />
        <Categories />
        { !list.length
          ? (
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          ) : (
            <div>teste</div>
          )}
      </div>
    );
  }
}
