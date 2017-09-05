import React, {Component} from 'react';

import ShopNav from './ShopNav.js';

export default class Products extends Component {

  render() {
    return (
      <div>
        <div id="prodHeroContainer">
          <h1>Products</h1>
        </div>

        <main>
          <div>
            <ShopNav/>
          </div>

          <div>
            {this.props.children}
          </div>
          <div>

          </div>
        </main>
      </div>
    )
  }
}
