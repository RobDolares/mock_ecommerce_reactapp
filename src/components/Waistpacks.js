import React, { Component } from 'react';
import packdata from '../data/packdata.js';

export default class Waistpacks extends Component {
  render(){
    let waistpacks = packdata.map((waistpack)=>{
      if (waistpack.type === 'waistpack') {
        return(
          <div>
            <img src="http://via.placeholder.com/350x250" />
            <div>
              {waistpack.brand}
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
