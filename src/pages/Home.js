import React, { Component } from 'react';
import Header from '../components/Header';

export default class Home extends Component {
  state = {
    list: [],
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <Header />
        { list.length === 0
        && (
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        )}
      </div>
    );
  }
}
