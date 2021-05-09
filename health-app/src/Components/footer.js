import React, { useContext, Component } from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../Cssfiles/footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
      <>
    {/* <div className="rs-footer-inner pb-100 md-pb-80">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-12">
                <div className="footer-section pt-100 md-pt-80">
                    <div className="widget-desc">
                        <p>
                            We are here to help you ulilizing your precious time efficiently.
                        </p>
                    </div>
                    <div className="widget-contact">
                        <ul>
                            <li>
                            <FontAwesomeIcon icon={faHome} />
                                Middle Badda, Dhaka
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="#">support@rstheme.com</a>
                            </li>
                            <li>
                                <i className="fa fa-clock-o"></i>
                                10:00 AM - 11:30 PM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12">
                <div className="footer-section pt-100 md-pt-35">
                    <div className="footer-title">
                        <h3>recent posts</h3>
                    </div>
                    <div className="recent-post-widget mb-20">
                        <div className="post-img">
                            <img src="images/footer/img/5.jpg" alt=""/>
                        </div>
                        <div className="post-item">
                            <div className="post-desc">
                                <a href="#">We care about your health?</a>
                            </div>
                            <span className="post-date">
                                <i className="fa fa-calendar"></i>
                                November 5,2018
                            </span>
                        </div>
                    </div>	
                    <div className="recent-post-widget mb-20">
                        <div className="post-img">
                            <img src="images/footer/img/6.jpg" alt=""/>
                        </div>
                        <div className="post-item">
                            <div className="post-desc">
                                <a href="#"> Your Smile Make us Happy </a>
                            </div>
                            <span className="post-date">
                                <i className="fa fa-calendar"></i>
                                November 5,2018
                            </span>
                        </div>
                    </div>	
                    <div className="recent-post-widget">
                        <div className="post-img">
                            <img src="images/footer/img/5.jpg" alt=""/>
                        </div>
                        <div className="post-item">
                            <div className="post-desc">
                                <a href="#"> Expert Doctor Check up </a>
                            </div>
                            <span className="post-date">
                                <i className="fa fa-calendar"></i>
                                November 5,2018
                            </span>
                        </div>
                    </div>
                </div>					
            </div>
            <div className="col-lg-3 col-md-12">
                <div class="footer-section pl-60 md-pl-0 pt-100 md-pt-45">
                    <div class="footer-title">
                        <h3>opening hours</h3>
                    </div>
                    <div class="openingfoot">
                        <ul>
                            <li>Mon-Tue: 10.00-18-0</li>
                            <li>Wed-Thur: 10.00-17.0</li>
                            <li>Fri-Sat 10.00-14.0</li>
                            <li>Saturday: 10:00-12.0</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12">
                <div className="footer-section pt-100 md-pt-35">
                    <div className="footer-title">
                        <h3>SignUp For Newsletter</h3>
                    </div>
                    <div className="widget-desc md-mt-0">
                        <p>
                            Awesome medical template for single doctor or clinic or hospital. 
                                This theme will help you organizing your site.
                        </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div> */}
    <div className="rs-footer-bottom">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="copy-right-part text-center">
						<p>© 2021 All Rights Reserved</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/* </div> */}

    </>
  );
}





export default Footer;
