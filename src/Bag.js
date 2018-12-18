import React, { Component } from 'react';
import './App.css';
import Header from './Auto/Header';
import Psk from './Auto/Psk';
import SectionNameBag from './Auto/SectionNameBag';
import BagProduct from './Auto/BagProduct';
import Order from './Auto/Order';
import Footer from './Auto/Footer';

class Bag extends React.PureComponent {
  render() {
    return (
      <div className="Bag">
     
        <Header />
        <Psk /> 
        <SectionNameBag />
        <BagProduct />
        <Order />
        <Footer />
     
      </div>
    );
  }
}

export default Bag;
