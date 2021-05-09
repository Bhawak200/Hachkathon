import React from "react";
import { db } from "./database";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./Badge";
import Img1 from "./Images/doctors/1.jpg";
import Img2 from "./Images/doctors/2.jpg";
import Img3 from "./Images/doctors/3.jpg";
import Img4 from "./Images/doctors/4.jpg";
import Img5 from "./Images/doctors/5.jpg";
import Img6 from "./Images/doctors/6.jpg";
import Img7 from "./Images/doctors/7.jpg";
import Img8 from "./Images/doctors/8.jpg";
import Img9 from "./Images/doctors/9.jpg";
import Img10 from "./Images/doctors/10.jpg";
import Img11 from "./Images/doctors/11.jpg";
import Img12 from "./Images/doctors/12.jpg";
import "../index.css";

class Doctors extends React.Component {
	constructor() {
		super();
		this.state = {
			city: "Delhi",
			doctors: [],
			isLoading: true,
			img: [
				Img1,
				Img2,
				Img3,
				Img4,
				Img5,
				Img6,
				Img7,
				Img8,
				Img9,
				Img10,
				Img11,
				Img12,
			],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		db.collection(this.state.city)
			.get()
			.then((snapshot) => {
				let array = [];
				snapshot.docs.forEach((doc) => {
					array.push(doc.data());
				});
				this.setState({
					doctors: array,
					isLoading: false,
				});
			});
		event.preventDefault();
	}

	componentDidMount() {
		db.collection(this.state.city)
			.get()
			.then((snapshot) => {
				let array = [];
				snapshot.docs.forEach((doc) => {
					array.push(doc.data());
				});
				this.setState({
					doctors: array,
					isLoading: false,
				});
			});
	}
	render() {
		// console.log(this.state);
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>Select Your City</h1>
				<form
					onSubmit={this.handleSubmit}
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
						className="btn btn-info"
						style={{ margin: "0 2%" }}
					>
						Show Doctors
					</button>
				</form>

				{this.state.isLoading ? (
					<div>
						<h1>Loading.....</h1>
					</div>
				) : (
					<div className="badges-container">
						{this.state.doctors.map((doctor) => {
							console.log("Rendering");
							return (
								<Badge
									name={doctor.name}
									education={doctor.qualification}
									specalist={doctor.specilisation}
									availability={doctor.availability}
									path={this.state.img[doctor.index]}
									key={doctor.index}
								/>
							);
						})}
					</div>
				)}
			</div>
		);
	}
}

export default Doctors;
