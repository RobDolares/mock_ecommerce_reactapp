import React, {Component} from 'react';
import sleepdata from '../data/sleepdata.js';

export default class SleepOther extends Component {
  render() {
    let sleepother = sleepdata.map((sleepother, id) => {
      if (sleepother.type === 'other') {
        return (
          <div className="listItem" key={id}>
            <img className="sleepOtherImg" src={sleepother.img} alt={sleepother.model}/>
            <div className="itemInfo">
              <span><strong>{sleepother.brand}</strong></span>
              <span>{sleepother.model}</span>
              <span>{sleepother.price}</span>
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
        {sleepother}
      </div>
    )
  }
}
