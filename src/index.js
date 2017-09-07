import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/styles.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout'
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products'
import Contact from './components/Contact';
import Backpacks from './components/Backpacks';
import Daypacks from './components/Daypacks';
import Waistpacks from './components/Waistpacks';
import Tents from './components/Tents'
import Hammocks from './components/Hammocks'
import ShelterOther from './components/ShelterOther'
import SleepBags from './components/SleepBags'
import SleepPads from './components/SleepPads'
import SleepOther from './components/SleepOther'


  ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Products>
          <Route path="/products/packs/backpacks" component={Backpacks}/>
          <Route path="/products/packs/daypacks" component={Daypacks}/>
          <Route path="/products/packs/waistpacks" component={Waistpacks}/>
          <Route path="/products/shelter/tents" component={Tents}/>
          <Route path="/products/shelter/hammocks" component={Hammocks}/>
          <Route path="/products/shelter/other" component={ShelterOther}/>
          <Route path="/products/sleep/sleeping-bags" component={SleepBags}/>
          <Route path="/products/sleep/sleeping-pads" component={SleepPads}/>
          <Route path="/products/sleep/other" component={SleepOther}/>
      </Products>
    </Switch>
  </BaseLayout>

</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
