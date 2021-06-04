import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

/**
 * @author
 * @function LinkCards
 **/

const LinkCards = (props) => {
  return (
    (props.link)?
    <div>
      <div className="fourLinks">
        <Col>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={props.link}
          >
            <div className="link">
              <div className="imgContainer">
                <img src={props.img}></img>
              </div>
              <h5 className="heading">{props.heading} </h5>
            </div>
          </Link>
        </Col>
        {/* <Col>
                  <Link style={{textDecoration:"none", color:"black"}} to= {props.link2}>
            <div className="link">
              <div className ="imgContainer">
                <img src={props.img2}></img>
              </div>
              <h5 className="heading">{props.heading2} </h5>
            </div>
          </Link></Col>
                  <Col>
                  <Link style={{textDecoration:"none", color:"black"}} to= {props.link3}>
            <div className="link">
              <div className ="imgContainer">
                <img src={props.img3}></img>
              </div>
              <h5 className="heading">{props.heading3}</h5>
            </div>
          </Link></Col>
          <Col>
                  <Link style={{textDecoration:"none", color:"black"}} to= {props.link4}>
            <div className="link">
              <div className ="imgContainer">
                <img src={props.img4}></img>
              </div>
              <h5 className="heading">{props.heading4}</h5>
            </div>
          </Link></Col>

                  <Col>
                  <Link style={{textDecoration:"none", color:"black"}} to= {props.link5}>
            <div className="link">
              <div className ="imgContainer">
                <img src={props.img5}></img>
              </div>
              <h5 className="heading">{props.heading5}</h5>
            </div>
          </Link></Col>
          <Col>
                  <Link style={{textDecoration:"none", color:"black"}} to= {props.link6}>
            <div className="link">
              <div className ="imgContainer">
                <img src={props.img6}></img>
              </div>
              <h5 className="heading">{props.heading6}</h5>
            </div>
          </Link></Col>
          <Col>
                  <Link style={{textDecoration:"none", color:"black"}} to= {props.link7}>
            <div className="link">
              <div className ="imgContainer">
                <img src={props.img7}></img>
              </div>
              <h5 className="heading">{props.heading7}</h5>
            </div>
          </Link></Col>
          <Col>
                  <Link style={{textDecoration:"none", color:"black"}} to= {props.link8}>
            <div className="link">
              <div className ="imgContainer">
                <img src={props.img8}></img>
              </div>
              <h5 className="heading">{props.heading8}</h5>
            </div>
          </Link></Col>
           */}
      </div>
    </div>: null
  );
};

export default LinkCards;
