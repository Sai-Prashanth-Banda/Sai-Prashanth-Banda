import React from 'react';
import {BrowserRouter,Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile'

const Routing=()=>{
    return (
        <BrowserRouter>
        <ul class="nav">
        <li class="nav-item">
    <Link exact to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link exact to="/about">About</Link>
  </li>
  <li class="nav-item">
    <Link exact to="/profile">Profile</Link>
  </li>
</ul>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/profile" component={Profile}></Route>
           </BrowserRouter> 
    )
        }
export default Routing;