import Carouselpart from "./Components/Carouselpart";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "./Components/Badge";
import Img1 from "./Components/Images/trial/1.jpg";
import Img2 from "./Components/Images/trial/2.jpg";
import Img3 from "./Components/Images/trial/3.jpg";
import Img4 from "./Components/Images/trial/4.jpg";
import Img5 from "./Components/Images/trial/5.jpg";

import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./Components/About";

function App() {
	return (
		<Router>
			<div>
				<Header> </Header>
				<Carouselpart></Carouselpart>
				<About></About>

				<div
					className="container"
					style={{
						margin: "10% 10% 2% 10%",
						border: "1px",
						borderRadius: "6px",
					}}
				>
					<p
						className="fs-1 text-center"
						style={{ textDecoration: "underline" }}
					>
						Our Doctors
					</p>
					<div
						className="badges-container"
						style={{
							overflow: "auto",
							display: "flex",
							justifyContent: "space-around",
						}}
					>
						<Badge
							name="Robert Adler"
							education="MD, MSEd"
							specalist="Pediatrics"
							availability="11 am - 5pm in Care Hospitals"
							path={Img1}
						/>
						<Badge
							name="Sarah Badran"
							education="MD, MACM, FSCAI, MHFSAMD"
							specalist="Cardiologist"
							availability="10 am - 3pm in Fortis Healthcare"
							path={Img2}
						/>
						<Badge
							name="Sally Ward"
							education="MD"
							specalist="Pulmonology"
							availability="11 am - 5pm in Sahyadri Hospital"
							path={Img3}
						/>
					</div>

					<div
						className="badges-container"
						style={{
							overflow: "auto",
							display: "flex",
							justifyContent: "space-around",
							alignItems: "baseline",
						}}
					>
						<Badge
							name="Mark Borchert"
							education="MD"
							specalist="Ophthalmology"
							availability="11 am - 5pm in Vasan Healthcare"
							path={Img4}
						/>
						<Badge
							name="Yvonne Gutierrez"
							education="MD"
							specalist="General Pediatrics"
							availability="11 am - 5pm in Sterling Hospitals"
							path={Img5}
						/>
					</div>
				</div>
				<div style={{ textAlign: "center", marginBottom: "6%" }}>
					<button className="btn btn-outline-info">See More</button>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
}

export default App;
