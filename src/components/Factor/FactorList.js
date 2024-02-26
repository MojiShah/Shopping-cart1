import React, { Component } from 'react';
import './FactorList.css';

export default class FactorList extends Component {
  constructor(props){
    super(props);

  }

  removeHandler(){
    this.props.onRemove();
  }


  render() {
    return (
      
      <tr>
          <td>
            <div className="img">
              <img src={this.props.image} alt="productlist" />
            </div>
            <div className="name">
              {this.props.name}
            </div>
          </td>
        <td><div>${this.props.price}</div></td>
          <td>
            <button className='btn btn-danger' onClick={this.removeHandler.bind(this)}>remove</button>
          </td>
      </tr>
    )
  }
}
