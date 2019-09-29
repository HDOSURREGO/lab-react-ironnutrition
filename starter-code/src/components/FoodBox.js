import React from "react";
import foods from "../foods.json";

class FoodBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: foods,
			newName: "",
			newCalories: "",
			newImage: ""
		};
	}

	showFoodBox = () => {
		return this.state.list.map((eachFoodBox, index) => {
			return (
				<div key={index} className="box">
					<article className="media">
						<div className="media-left">
							<figure className="image is-64x64">
								<img src={eachFoodBox.image} alt="pic" />
							</figure>
						</div>
						<div className="media-content">
							<div className="content">
								<p>
									<strong>{eachFoodBox.name}</strong> <br />
									<small>{eachFoodBox.calories}</small>
								</p>
							</div>
						</div>
						<div className="media-right">
							<div className="field has-addons">
								<div className="control">
									<input className="input" type="number" value="1" />
								</div>
								<div className="control">
									<button className="button is-info">+</button>
								</div>
							</div>
						</div>
					</article>
				</div>
			);
		});
	};

	render() {
		return <div>{this.showFoodBox()}</div>;
	}
}

export default FoodBox;
