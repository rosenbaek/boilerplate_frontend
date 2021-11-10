import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Header";
import Home from "./screens/HomeScreen";
//import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Nav />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				{/* Example how to protect screens behind login wall: 
				<PrivateRoute path="/scrape">
					<ScrapeScreen />
				</PrivateRoute> */}

				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
