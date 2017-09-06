import React, {Component} from 'react';
import shelterdata from '../data/shelterdata.js';

export default class Hammocks extends Component {
  render() {
    let hammocks = shelterdata.map((hammock, id) => {
      if (hammock.type === 'hammock') {
        return (
          <div className="listItem" key={id}>
            <img className="hammockImg" src={hammock.img} alt={hammock.model}/>
            <div className="itemInfo">
              <span><strong>{hammock.brand}</strong></span>
              <span>{hammock.model}</span>
              <span>{hammock.price}</span>
            </div>
            <div className="buyBtns">
              <button className="btn btn-md">Add to Cart</button>
              <button className="btn btn-sm">Add to WishList</button>
            </div>
          </div>
        )
      }

    })

    return (
      <div className="itemsContainer">
        {hammocks}
      </div>
    )
  }
}
