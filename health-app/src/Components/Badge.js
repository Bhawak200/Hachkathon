import React from "react";

// This Function accepts 4 props name,education,specalist,availability

const Badge = (props) => {
	return (
		<div
			className="card shadow-lg"
			style={{ width: "18rem", margin: "20px 10px" }}
		>
			<img
				className="card-img-top"
				src={props.path}
				alt="Image of a Doctor"
			/>
			<div className="card-body">
				<h3 className="card-title">{props.name}</h3>
				<p className="card-text">Education: {props.education}</p>
				<p className="card-text">Specalist in {props.specalist}</p>
				<p className="card-text">
					Available during {props.availability}
				</p>
			</div>
		</div>
	);
};

export default Badge;
