import React from "react";
import {Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			city: "",
			qualification: "",
			specilisation: "",
			availability: "",
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
		console.log("Submited!!!");
		event.preventDefault();
	}

	render() {
		return (
			<div
				className="card shadow-lg"
				style={{
					padding: "4%",
					margin: "6% 15%",
				}}
			>
				<p className="text-center fs-3">
					Only Fill this form when you are a doctor
				</p>
				<form onSubmit={this.handleSubmit}>
					<div className="row mb-3">
						<label htmlFor="name" className="col-sm-2">
							Name :
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								name="name"
								id="name"
								className="form-control .form-control-lg"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<br />
					</div>

					<div className="row mb-3">
						<label htmlFor="qual" className="col-sm-2">
							Qualification:
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								name="qualification"
								id="qual"
								className="form-control .form-control-lg"
								placeholder="MD, MBBS, ..."
								value={this.state.qualification}
								onChange={this.handleChange}
							/>
						</div>
						<br />
					</div>

					<div className="row mb-3">
						<label htmlFor="specil" className="col-sm-2">
							Specilisation:
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								name="specilisation"
								id="specil"
								className="form-control .form-control-lg"
								placeholder="Cardiologist or Neurology or etc."
								value={this.state.specilisation}
								onChange={this.handleChange}
							/>
						</div>
						<br />
					</div>

					<div className="row mb-3">
						<label htmlFor="city" className="col-sm-2">
							City:
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								name="city"
								id="city"
								className="form-control .form-control-lg"
								value={this.state.city}
								onChange={this.handleChange}
							/>
						</div>
						<br />
					</div>

					<div className="row mb-3">
						<label htmlFor="details" className="col-sm-2">
							Availability Details:
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								name="availability"
								id="details"
								className="form-control .form-control-lg"
								placeholder="10am-11am, City hospital..(address), 11am-1pm clinic"
								value={this.state.availability}
								onChange={this.handleChange}
							/>
						</div>
						<br />
					</div>
					<Link to='/'>
					<button type="submit" className="btn-primary btn">
						Register
					</button>
					</Link>
				</form>
			</div>
		);
	}
}

export default Login;
