import React, { useContext, Component } from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../Cssfiles/footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
      <>
    <div class="rs-footer-inner pb-100 md-pb-80">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <div class="footer-section pt-100 md-pt-80">
                    <div class="footer-logo">
                        <img src="images/logo2.png" alt=""/>
                    </div>
                    <div class="widget-desc">
                        <p>
                            we denounce with righteous indignation and dislike men who are so beguiled that make awesome website with optimize.
                        </p>
                    </div>
                    <div class="widget-contact">
                        <ul>
                            <li>
                                <i class="fa fa-globe"></i>
                                Middle Badda, Dhaka
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <a href="#">support@rstheme.com</a>
                            </li>
                            <li>
                                <i class="fa fa-clock-o"></i>
                                10:00 AM - 11:30 PM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <div class="footer-section pt-100 md-pt-35">
                    <div class="footer-title">
                        <h3>recent posts</h3>
                    </div>
                    <div class="recent-post-widget mb-20">
                        <div class="post-img">
                            <img src="images/footer/img/5.jpg" alt=""/>
                        </div>
                        <div class="post-item">
                            <div class="post-desc">
                                <a href="#">We care about your health?</a>
                            </div>
                            <span class="post-date">
                                <i class="fa fa-calendar"></i>
                                November 5,2018
                            </span>
                        </div>
                    </div>	
                    <div class="recent-post-widget mb-20">
                        <div class="post-img">
                            <img src="images/footer/img/6.jpg" alt=""/>
                        </div>
                        <div class="post-item">
                            <div class="post-desc">
                                <a href="#"> Your Smile Make us Happy </a>
                            </div>
                            <span class="post-date">
                                <i class="fa fa-calendar"></i>
                                November 5,2018
                            </span>
                        </div>
                    </div>	
                    <div class="recent-post-widget">
                        <div class="post-img">
                            <img src="images/footer/img/5.jpg" alt=""/>
                        </div>
                        <div class="post-item">
                            <div class="post-desc">
                                <a href="#"> Expert Doctor Check up </a>
                            </div>
                            <span class="post-date">
                                <i class="fa fa-calendar"></i>
                                November 5,2018
                            </span>
                        </div>
                    </div>
                </div>					
            </div>
            <div class="col-lg-3 col-md-12">
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
            <div class="col-lg-3 col-md-12">
                <div class="footer-section pt-100 md-pt-35">
                    <div class="footer-title">
                        <h3>SignUp For Newsletter</h3>
                    </div>
                    <div class="widget-desc md-mt-0">
                        <p>
                            Awesome medical template for single doctor or clinic or hospital. 
                                This theme will help you organizing your site.
                        </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
    <div class="rs-footer-bottom">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="copy-right-part text-center">
						<p>© 2019 All Rights Reserved</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    </>
  );
}





export default Footer;