import React, { Component } from 'react';
import packdata from '../data/packdata.js';

export default class Backpacks extends Component {
  render(){
    let backpacks = packdata.map((backpack)=>{
      if (backpack.type === 'backpack') {
        return(
          <div>
            <img src="http://via.placeholder.com/350x250" />
            <div>
              {backpack.brand}
            </div>


          </div>
      )
    }

  })

  return(
    <div className="itemsContainer">
      {backpacks}
    </div>
  )


  }
}
