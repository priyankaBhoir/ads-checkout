
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AdsContainer from "./AdsContainer.jsx";
import CartContainer from "./CartContainer.jsx";

const App = () => {
 return (
 	<Router>
 		<div>
	 		<nav className="light-blue lighten-1"> 
	 			<div className="nav-wrapper container"> 
		  		<h2 className="center"> Buy Ad for employer </h2>
		  	</div>
		  </nav>
			<div className="container">
			 	<Route exact path="/" component={AdsContainer}/>
		    <Route path="/cart" component={CartContainer}/>
		   </div>
	  </div>
	</Router>
 )

}
export default App;