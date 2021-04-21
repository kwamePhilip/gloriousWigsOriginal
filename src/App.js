import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.page';
import FrontalWigs from './pages/shop/frontalwigs/frontalwigs.page';
import FullLaceWigs from './pages/shop/full-lacewigs/full-lacewigs.page';
import LaceFrontalWigs from './pages/shop/lacefrontalwigs/lacefrontalwigs.page';
import Header from './compoonents/header/header.component';
import CheckoutPage from './pages/checkout/checkout.page'




class App extends Component {
  render()
  {return (
    <div>
      <Header/>
      
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/frontalWigs' component={FrontalWigs}  />
      <Route exact path='/fullLaceWigs' component={FullLaceWigs}  />
      <Route exact path='/laceFrontalWigs' component={LaceFrontalWigs} />
      <Route exact path='/checkout' component={CheckoutPage} />

      </Switch>
      

  
    </div>
  );}
}

export default App;
