import React, {Component} from 'react';
import shelterdata from '../data/shelterdata.js';

export default class Tents extends Component {
  render() {
    let tents = shelterdata.map((tent, id) => {
      if (tent.type === 'tent') {
        return (
          <div className="listItem" key={id}>
            <img className="tentImg" src={tent.img} alt={tent.model}/>
            <div className="itemInfo">
              <span><strong>{tent.brand}</strong></span>
              <span>{tent.model}</span>
              <span>{tent.price}</span>
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
        {tents}
      </div>
    )
  }
}
