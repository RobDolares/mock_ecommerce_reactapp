import React, { Component } from 'react';
import packdata from '../data/packdata.js';

export default class Daypacks extends Component {
  render(){
    let daypacks = packdata.map((daypack)=>{
      if (daypack.type === 'daypack') {
        return(
          <div>
            <img src="http://via.placeholder.com/350x250" />
            <div>
              {daypack.brand}
            </div>


          </div>
      )
    }

  })

  return(
    <div className="itemsContainer">
      {daypacks}
    </div>
  )


  }
}
