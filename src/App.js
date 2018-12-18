import React, { Component } from 'react';
import Header from './Auto/Header';
import About from './Auto/About';
import Carousel from './Auto/Carousel';
import Products from './Auto/Products';
import Car from './Auto/Car';
import Footer from './Auto/Footer';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Carousel />
        <Products />
        <Car />
        <Footer />
      </div>
    );
  }
}

export default App;
