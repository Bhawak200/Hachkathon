import React from 'react'
import Doctor from "./Images/Doctor.jpg"
import Medicine from "./Images/Medicine.jpg"
import Instrument from "./Images/Instrument.jpg"
import {Carousel} from "react-bootstrap"
import '../Cssfiles/Carouselcss.css'

const Carouselpart = () => {
  return(
      <Carousel nextLabel="" prevLabel="" >
        <Carousel.Item>
          <img className="d-block w-100 responsive"  src={Doctor} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 responsive" src={Medicine}  alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 responsive"  src={Instrument} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      )
}

export default Carouselpart;