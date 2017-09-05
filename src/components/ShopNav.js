import React from 'react';
import {NavLink} from 'react-router-dom';

import backpack_01 from '../images/backpack_01.jpg';
import tent_01 from '../images/tent_01.jpg';
import sleepingbag from '../images/sleepingbag.jpg';

const ShopNav = (props)=>{

return(
  <div id="catContainer">
    <div className="dropdown btn-group">
      <li className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <h3>Pack</h3>
        <img src={backpack_01} alt=""/>
      </li>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><NavLink className="dropdown-item" to="/products/packs/backpacks">Backpacking Packs</NavLink></li>
        <li><NavLink className="dropdown-item" to="/products/packs/daypacks">Day Packs</NavLink></li>
        <li><NavLink className="dropdown-item" to="/products/packs/waistpacks">Waist Packs</NavLink></li>
      </ul>
    </div>
    <div className="dropdown btn-group">
      <li className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <h3>Shelter</h3>
        <img src={tent_01} alt=""/>
      </li>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><NavLink className="dropdown-item" to="/products/shelter/tent">Tents</NavLink></li>
        <li><NavLink className="dropdown-item" to="/products/shelter/hammock">Hammocks</NavLink></li>
        <li><NavLink className="dropdown-item" to="/products/shelter/other">Other</NavLink></li>
      </ul>
    </div>
    <div className="dropdown btn-group">
      <li className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <h3>Sleep</h3>
        <img src={sleepingbag} alt=""/>
      </li>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><NavLink className="dropdown-item" to="/products/sleep/bags">Sleeping Bags</NavLink></li>
        <li><NavLink className="dropdown-item" to="/products/sleep/pads">Sleeping Pads</NavLink></li>
        <li><NavLink className="dropdown-item" to="/products/sleep/other">Other</NavLink></li>
      </ul>
    </div>
  </div>
)

}

export default ShopNav;
