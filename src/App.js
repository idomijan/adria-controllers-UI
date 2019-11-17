import React, {Fragment} from 'react';
import  Controllers from './components/Controllers'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ControllerPage from './components/ControllerPage' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (  
    <Router>   
    
    <div className='rowC'>
    <Sidebar></Sidebar>
    <Switch>
      <Route path="/" exact component={Controllers}/>
      <Route path="/" exact component={Header}/>
      <Route path="/:id" component={ControllerPage} />
    </Switch>
    <div className="header"> <Header></Header></div>
    </div>
    </Router>
  );
}
export default App;