import React, { Component } from 'react';
import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';

export default class Home extends Component {
  state = {
    list: [],
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <Header />
        <main className="flex">
          <Categories />
          { list.length < 1 ? (
            <p data-testid="home-initial-message" className="text-xl">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : (
            <div className="flex gap-18">
              <div>teste</div>
            </div>
          )}
        </main>
      </div>
    );
  }
}
