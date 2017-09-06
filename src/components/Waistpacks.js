import React, { Component } from 'react';
import packdata from '../data/packdata.js';

export default class Waistpacks extends Component {
  render(){
    let waistpacks = packdata.map((waistpack, id)=>{
      if (waistpack.type === 'waistpack') {
        return(
          <div id="waistpackItem" className="listItem" key={id}>
            <img src={waistpack.img} />
            <div className="itemInfo">
              <span><strong>{waistpack.brand}</strong></span>
              <span>{waistpack.model}</span>
              <span>{waistpack.price}</span>
            </div>
            <div className="buyBtns">
              <button className="btn btn-md">Add to Cart</button>
              <button className="btn btn-sm">Add to WishList</button>
            </div>
        </div>
      )
    }

  })

  return(
    <div className="itemsContainer">
      {waistpacks}
    </div>
  )


  }
}
