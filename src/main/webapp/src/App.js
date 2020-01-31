import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCatalog from './component/ProductCatalogApp';
import CategoryDisplayComponent from './component/CategoryDisplayComponent';

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="container">
        <ProductCatalog />
        <CategoryDisplayComponent/>
      </div>
    );
  }
}


export default App;
