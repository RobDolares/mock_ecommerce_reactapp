import React, {Component} from 'react';
import shelterdata from '../data/shelterdata.js';

export default class ShelterOther extends Component {
  render() {
    let shelter = shelterdata.map((shelter, id) => {
      if (shelter.type === 'other') {
        return (
          <div className="listItem" key={id}>
            <img className="shelterOtherImg" src={shelter.img} alt={shelter.model}/>
            <div className="itemInfo">
              <span><strong>{shelter.brand}</strong></span>
              <span>{shelter.model}</span>
              <span>{shelter.price}</span>
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
        {shelter}
      </div>
    )
  }
}
