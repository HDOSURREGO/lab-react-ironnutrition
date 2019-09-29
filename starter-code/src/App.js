import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

class App extends React.Component {
	render() {
		return (
			<div>
				<FoodBox />
			</div>
		);
	}
}

export default App;
