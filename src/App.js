import React from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  console.log(getProductsFromCategoryAndQuery('Agro'));
  console.log(getCategories());
  return (
    <div className="App">
      INÍCIO
    </div>
  );
}

export default App;
