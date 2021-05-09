import React from 'react'
//import Doctor from './Images/Doctor.jpg'
import {Card, CardGroup} from "react-bootstrap"
import '../Cssfiles/Aboutcss.css'
import Mask from './Video/Mask.mp4'

const About = () => {
    return(
        <CardGroup style={{ marginTop: '1rem',backgroundColor:"white" }}>
                    
                    <video src={Mask} className="size-responsive" style={{maxHeight:"70vh"}} controls="controls" autoplay="true"/>
                <Card>
                    <Card.Body>
                    <Card.Title className="title-responsive display-4">About</Card.Title>
                    <Card.Text className="text-responsive h2">
                        Our basic idea is to create a website that has complete information regarding every doctor that
                        can be available in a particular city in a specific time schedule. This can be really helpful for all the patients 
                        who need specific treatment and are unaware of the particular doctor’s availability schedule in different hospitals.
                    </Card.Text>
                    </Card.Body>
                </Card>
       </CardGroup>
    )
}

export default About