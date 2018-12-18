import React, { Component } from 'react';
import './App.css';
import Header from './Auto/Header';
import SectionName from './Auto/SectionName';
import CatalogPrice from './Auto/CatalogPrice';
import Footer from './Auto/Footer';
import {connect} from 'react-redux'
import {getProducts, filterProducts} from './action/products.action';

class Catalog extends React.PureComponent {
  
  constructor(props){
    super(props);
    this.props.getProducts();
    this.props.filterProducts();
    this.state={
        
    }

  }; 
// filterBy=(event)=>{
//     console.log(event.target.value);
// if(event.target.checked){
//     this.setState({filterProducts})
// }else {
//     this.setState({getProducts})
// }
// };
  render() {
    const {products, getProducts, filterProducts}=this.props;
    
    return (
      <div className="Catalog">
        <Header />
        <SectionName />
        <CatalogPrice 
        data={products}
        click={getProducts} 
        filterBy={filterProducts}
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
  },
  filterProducts: ()=>{
    filterProducts(dispatch)
  }
    
  
}
  
}
)(Catalog);
