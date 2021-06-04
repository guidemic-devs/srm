import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./styles.css";

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
        <div className="Footer">
            <Row>
                <Col md={4}>
                <h5 style={{padding:"10px",textAlign:"center"}}>Check Out Our Social Media Handles</h5>
            <div className = "socialLinks">
          <a href={props.fblink} class="fa fa-facebook fa-2x"></a>&nbsp;&nbsp;&nbsp;
          <a href={props.twitterLink} class="fa fa-twitter fa-2x"></a><br/>&nbsp;&nbsp;&nbsp;
          <a href={props.instagaramLink} class="fa fa-instagram fa-2x"></a><br/>&nbsp;&nbsp;&nbsp;
          <a href={props.googleLink} class="fa fa-google fa-2x"></a><br/>&nbsp;&nbsp;&nbsp;
          <a href={props.youtubeLink} class="fa fa-youtube fa-2x"></a><br/>
          </div>
                </Col>
                <Col md={4}>
                <div>
                <Link style={{textDecoration:"none", color:'white'}} to="/termsandcondition">
                <h5 style={{padding:"10px", textAlign:"center"}}>Terms & Condition</h5>
                </Link>
                </div>
                <div>
                <Link style={{textDecoration:"none", color:'white'}} to="/termsandcondition">
                <h5 style={{padding:"10px", textAlign:"center"}}>Help and Support</h5>
                </Link>
                </div>
                </Col>

                <Col md={4}>
                <div> 
                <Link style={{textDecoration:"none", color:'white'}} to="/privacypolicy">
                <h5 style={{padding:"10px", textAlign:"center"}}>Privacy Policy</h5>
                </Link>
                </div>
                <div>
                <Link style={{textDecoration:"none", color:'white'}} to="/privacypolicy">
                <h5 style={{padding:"10px", textAlign:"center"}}>© Copyright Guidemic</h5>
                </Link>
                </div>
                </Col>

            </Row>
            
        </div>
   )

 }

export default Footer