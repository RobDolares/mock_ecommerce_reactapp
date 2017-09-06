import React, {Component} from 'react';
import sleepdata from '../data/sleepdata.js';

export default class SleepPads extends Component {
  render() {
    let sleepingpad = sleepdata.map((sleepingpad, id) => {
      if (sleepingpad.type === 'sleepingpad') {
        return (
          <div className="listItem" key={id}>
            <img src={sleepingpad.img} alt={sleepingpad.model}/>
            <div className="itemInfo">
              <span><strong>{sleepingpad.brand}</strong></span>
              <span>{sleepingpad.model}</span>
              <span>{sleepingpad.price}</span>
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
        {sleepingpad}
      </div>
    )
  }
}
