import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


  ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/" component={Home}/>
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
