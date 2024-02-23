// Filename - App.js

import  { Component } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./src/Home/HomeApp";
import TeamGeneratorApp from "./src/TeamGenerator/TeamGeneratorApp";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Routes>
						<Route
							exact
							path="/"
							element={<Home />}
						></Route>
						<Route
							exact
							path="/teamgenerator"
							element={<TeamGeneratorApp />}
						></Route>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;

