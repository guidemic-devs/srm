import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles.css";

/**
* @author
* @function LinkCards
**/

const LinkCards = (props) => {
  return(
    <div>
        <div className="threeLinks">
        <Row>
                  <Col>
                  <Link style={{textDecoration:"none"}} to= {props.link1}>
              
            <div className="link1">
              <div className ="imgContainer">
                <img src={props.img1}></img>
              </div>
              <h5 className="heading">{props.heading1} </h5>
            </div>
          </Link></Col>
                  <Col>
                  <Link style={{textDecoration:"none"}} to= {props.link2}>
            <div className="link2">
              <div className ="imgContainer">
                <img src={props.img2}></img>
              </div>
              <h5 className="heading">{props.heading2} </h5>
            </div>
          </Link></Col>
                  <Col>
                  <Link style={{textDecoration:"none"}} to= {props.link3}>
            <div className="link3">
              <div className ="imgContainer">
                <img src={props.img3}></img>
              </div>
              <h5 className="heading">{props.heading3}</h5>
            </div>
          </Link></Col>
          <Col>
                  <Link style={{textDecoration:"none"}} to= {props.link4}>
            <div className="link4">
              <div className ="imgContainer">
                <img src={props.img4}></img>
              </div>
              <h5 className="heading">{props.heading4}</h5>
            </div>
          </Link></Col>
                  </Row>
          
          
          
        </div>
    </div>
   )

 }

export default LinkCards