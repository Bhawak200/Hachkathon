import React from "react";
import { db } from "./database";
import "bootstrap/dist/css/bootstrap.css";

class Doctors extends React.Component {
	constructor() {
		super();
		this.state = {
			city: "Delhi",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>Select Your City</h1>
				<form
					style={{ display: "flex", justifyContent: "space-around" }}
				>
					<select
						className="form-select form-select-lg  mb-3"
						name="city"
						value={this.state.city}
						onChange={this.handleChange}
					>
						<option className="Delhi">Delhi</option>
						<option className="Mumbai">Mumbai</option>
						<option className="Kanpur">Kanpur</option>
						<option className="Bangalore">Bangalore</option>
					</select>
					<button
						type="submit"
						className="btn btn-Info"
						style={{ margin: "0 2%" }}
					>
						Show Doctors
					</button>
				</form>
			</div>
		);
	}
}

// function Doctors() {
// 	db.collection("Delhi")
// 		.get()
// 		.then((snapshot) => {
// 			snapshot.docs.forEach((doc) => {
// 				console.log(doc.data());
// 			});
// 		});
// 	return (
// 		<div>
// 			<h1>Hello World!!!!</h1>
// 		</div>
// 	);
// }

export default Doctors;
