import React, { Component } from 'react';
import './App.css';
import './Style.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

//import component
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import Footer from './Components/Footer';
class App extends Component{
	render(){
		return (
		  	<BrowserRouter>
			<div className="main_wrapper">
			<Nav />
				
				<Switch>
							<Route exact path='/' component= {Home} />
							<Route path='/About' component={About} />
							<Route path='/Contact' component={Contact} />
						</Switch>
						
			</div>
			<Footer/>
		    </BrowserRouter>
		    
		);
	}
}

export default App;



