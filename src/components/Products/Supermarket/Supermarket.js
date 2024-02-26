import React, { Component } from 'react'
import './Supermarket.css';


export default class Supermarket extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(id){
        this.props.onAddProduct(id);
    }
    
  render() {
      return (
          <>
              <div className="container mt-5">
                  <div className="card" style={{ width: '250px' }}>
                      <img className="card-img-top" src={this.props.image} alt="Card image" style={{ width: '100%' }} />
                      <div className="card-body">
                          <h4 className="card-title">{this.props.name}</h4>
                          <p className="card-text">price: {this.props.price} $</p>
                          <a href="#" className="btn btn-primary"
                          onClick={this.clickHandler.bind(this,this.props.id)}>Add to cart</a>
                      </div>
                  </div>
              </div>
          </>
      )
  }
}
