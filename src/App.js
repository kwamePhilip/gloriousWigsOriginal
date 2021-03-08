import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.page';
import FrontalWigs from './pages/shop/frontalwigs/frontalwigs.page';
import FullLaceWigs from './pages/shop/full-lacewigs/full-lacewigs.page';
import LaceFrontalWigs from './pages/shop/lacefrontalwigs/lacefrontalwigs.page';
import Header from './compoonents/header/header.component';




function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/frontalWigs' component={FrontalWigs}  />
      <Route path='/fullLaceWigs' component={FullLaceWigs}  />
      <Route path='/laceFrontalWigs' component={LaceFrontalWigs} />
    


      </Switch>

  
    </div>
  );
}

export default App;
