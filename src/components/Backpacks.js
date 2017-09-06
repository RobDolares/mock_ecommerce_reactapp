import React, {Component} from 'react';
import packdata from '../data/packdata.js';

export default class Backpacks extends Component {
  render() {
    let backpacks = packdata.map((backpack, id) => {
      if (backpack.type === 'backpack') {
        return (
          <div className="listItem" key={id}>
            <img src={backpack.img}/>
            <div className="itemInfo">
              <span><strong>{backpack.brand}</strong></span>
              <span>{backpack.model}</span>
              <span>{backpack.price}</span>
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
        {backpacks}
      </div>
    )

  }
}
