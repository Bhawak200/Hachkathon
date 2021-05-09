import React from "react";
import 	Navbar from "./Components/Navbar"
import Footer from "./Components/footer"
import Login from "./Components/Login";
import Main from "./Components/Main";
import Doctors from "./Components/Doctors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
		<Navbar> </Navbar>
			<Switch>
				<Route exact path="/" component={Main}></Route>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/doctors" component={Doctors}></Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
};
export default App;
