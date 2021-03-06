import Carouselpart from "./Carouselpart";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "./Badge";
import Img1 from "./Images/trial/1.jpg";
import Img2 from "./Images/trial/2.jpg";
import Img3 from "./Images/trial/3.jpg";
import Img4 from "./Images/trial/4.jpg";
import Img5 from "./Images/trial/5.jpg";
import  { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./footer";
import "../Cssfiles/Doctorpart.css";
import About from "./About";

function Main() {
	return (
		<>
			<div>
				
				<Carouselpart></Carouselpart>
				<About></About>

				<div
					className="container"
					style={{
						margin: "5%",
						border: "1px",
						borderRadius: "6px",
					}}
				>
					<p
						className="fs-1 text-center doctor-styling "
						style={{ textDecoration: " bold" }}
					>
						Our Doctors
					</p>
					<div className="badges-container">
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

					<div className="badges-container">
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
					<div style={{ textAlign: "center" }}>
					 <Link to="/doctors">
						<button className="btn btn-lg btn-warning see-more">
							See more
						</button>
						</Link>
					</div>
				</div>
			
			</div>
		</>
	);
}

export default Main;
