import React, { Component } from 'react';
import productsData from '../../ProductsData';
import Laptop from './Laptop/Laptop';
import Phone from './Phone/Phone';
import Furniture from './Furniture/Furniture';
import Supermarket from './Supermarket/Supermarket';
import FactorList from '../Factor/FactorList';


import './Product.css';


export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: productsData,
      shoppingCart: [],
      number:0
    }
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
  }

  
  addToCart(id) {
    this.setState({number : this.state.number +1 })
    let allProductsArray = Object.entries(this.state.products)
    let allProductList = [...allProductsArray[0][1],
    ...allProductsArray[1][1],
    ...allProductsArray[2][1],
    ...allProductsArray[3][1]];
    let selectedProduct = allProductList.find(x => x.id === id);
   
    // this.setState({ shoppingCart: [...this.state.shoppingCart, selectedProduct] })
    this.setState(
      { shoppingCart: [...this.state.shoppingCart, selectedProduct] }
    )
   
  }

  calculateTotalPrice(){
    let totalPrice = 0;
    for (let i = 0; i < this.state.shoppingCart.length;i++){
      totalPrice += this.state.shoppingCart[i].price;
    }
    return totalPrice
  }

  removeProduct(id){
    let filteredProducts = this.state.shoppingCart.filter(x => x.id !== id);
    this.setState({shoppingCart:filteredProducts});
  }

  emptyProducts(){
    this.setState({shoppingCart:[]});
  }


  render() {
    return (
      <>
        <h1 className='mt-3'>Laptop</h1>
        <div className="laptops">
          {this.state.products.laptop.map(x => <Laptop key={x.id} {...x}
            onAddProduct={this.addToCart.bind(this)} />)}
        </div>
        <hr />

        <h1 className='mt-3'>Cell Phone</h1>
        <div className="laptops">
          {this.state.products.phone.map(x => <Phone key={x.id} {...x}
            onAddProduct={this.addToCart.bind(this)} />)}
        </div>
        <hr />

        <h1 className='mt-3'>Furniture</h1>
        <div className="laptops">
          {this.state.products.furniture.map(x => <Furniture key={x.id} {...x}
            onAddProduct={this.addToCart.bind(this)} />)}
        </div>
        <hr />

        <h1 className='mt-3'>Supermarket</h1>
        <div className="laptops">
          {this.state.products.supermarket.map(x => <Supermarket key={x.id} {...x}
            onAddProduct={this.addToCart.bind(this)} />)}
        </div>


        <div className='products_list'>
          <h1 className='mt-5'>Product List</h1>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th style={{textAlign:'center'}}>Product name</th>
                <th style={{textAlign:'center'}}>Price</th>
                <th style={{textAlign:'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.shoppingCart.map(x =>
                <FactorList key={x.id*Math.random()} 
                {...x}
                number={this.state.number}
                  onRemove={this.removeProduct.bind(this, x.id)}
                />)}

            </tbody>
          </table>

          <div style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold', width: '100%' }}>
            Total Price: ${this.calculateTotalPrice()}
          </div>

          <button className='btn btn-primary'
            onClick={this.emptyProducts.bind(this)}
          >Empty Cart</button>
        </div>

      </>
    )

  }
}







