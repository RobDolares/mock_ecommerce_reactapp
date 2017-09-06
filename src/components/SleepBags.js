import React, {Component} from 'react';
import sleepdata from '../data/sleepdata.js';

export default class SleepBags extends Component {
  render() {
    let sleepingbag = sleepdata.map((sleepingbag, id) => {
      if (sleepingbag.type === 'sleepingbag') {
        return (
          <div className="listItem" key={id}>
            <img src={sleepingbag.img} alt={sleepingbag.model}/>
            <div className="itemInfo">
              <span><strong>{sleepingbag.brand}</strong></span>
              <span>{sleepingbag.model}</span>
              <span>{sleepingbag.price}</span>
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
        {sleepingbag}
      </div>
    )
  }
}
