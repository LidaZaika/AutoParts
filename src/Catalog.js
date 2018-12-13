import React, { Component } from 'react';
import './App.css';
import Header from './Auto/Header';
import SectionName from './Auto/SectionName';
import CatalogPrice from './Auto/CatalogPrice';
import Footer from './Auto/Footer';
import {connect} from 'react-redux'
import {getProducts} from './action/products.action';

class Catalog extends React.PureComponent {
  
  constructor(props){
    super(props);
    this.props.getProducts();
    this.state={

    }

  }; 

  render() {
    const {products, getProducts}=this.props;
    
    return (
      <div className="Catalog">
        <Header />
        <SectionName />
        <CatalogPrice 
        data={products}
        click={getProducts} 
        />
        <Footer />
      </div>
    );
  }
}

export default connect((state)=>{
  return{
products: state.products
  }
 
}, (dispatch)=>{
return{
  getProducts: ()=>{
    getProducts(dispatch)
  }
  }
  
}
)(Catalog);
