import React, {Component} from 'react';
import packdata from '../data/packdata.js';

export default class Daypacks extends Component {
  render() {
    let daypacks = packdata.map((daypack, id) => {
      if (daypack.type === 'daypack') {
        return (
          <div className="listItem" key={id}>
            <img src={daypack.img} alt={daypack.model}/>
            <div className="itemInfo">
              <span>
                <strong>{daypack.brand}</strong>
              </span>
              <span>{daypack.model}</span>
              <span>{daypack.price}</span>
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
        {daypacks}
      </div>
    );
  };
}
