import React from "react";
import foods from "../foods.json";

class FoodBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: foods,
			newName: "",
			newCalories: "",
			newImage: "",
			formShowing: false
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

	addNewFood = e => {
		e.preventDefault();

		let allFoods = [...this.state.list];

		let newFood = {
			name: this.state.newName,
			calories: this.state.newCalories,
			image: this.state.newImage
		};

		allFoods.unshift(newFood);

		this.setState({
			list: allFoods,
			newName: "",
			newCalories: "",
			newImage: "",
			formShowing: false
		});
	};

	updateInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	toggleForm = () => {
		this.setState({ formShowing: !this.state.formShowing });
	};

	render() {
		return (
			<div>
				<div className="columns" style={{ padding: "40px" }}>
					<div className="column">{this.showFoodBox()}</div>
					<div className="column">
						{!this.state.formShowing && ( //if formShowing is false show the button
							<button onClick={this.toggleForm} className="button is-primary">
								Add New Food
							</button>
						)}

						{this.state.formShowing && ( //if formShowing is true show the form
							<form onSubmit={this.addNewFood} style={{ padding: "40px" }}>
								<h2 className="title">Add New Food</h2>

								<p>Name</p>
								<input
									class="input is-info"
									placeholder="New Food Name"
									name="newName"
									type="text"
									value={this.state.newName}
									onChange={this.updateInput}
								/>

								<p>Calories</p>
								<input
									class="input is-info"
									placeholder="Enter Calories"
									name="newCalories"
									type="number"
									value={this.state.newCalories}
									onChange={this.updateInput}
								/>

								<p>Image</p>
								<input
									class="input is-info"
									placeholder="image url or local path"
									name="newImage"
									type="text"
									value={this.state.newImage}
									onChange={this.updateInput}
								/>

								<button
									className="button is-primary"
									style={{ padding: "10px" }}
								>
									Submit
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default FoodBox;
