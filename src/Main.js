import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Client from "./Client";
import Service from "./Service";
import Team from "./Team";
import Blog from "./Blog";

 


class Main extends Component {
  render() {
  
    return (
    <HashRouter>
        <div>
          <h1>Lucky Charms Studios</h1>
          <ul className="header">
           <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
             <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/Client">Client</NavLink></li>
             <li><NavLink to="/Service">Service</NavLink></li>
            <li><NavLink to="/Team">Team</NavLink></li>
             <li><NavLink to="/Blog">Blog</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>  
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/Client" component={Client}/>
          <Route path="/Service" component={Service}/>
          <Route path="/Team" component={Team}/>
          <Route path="/Blog" component={Blog}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;