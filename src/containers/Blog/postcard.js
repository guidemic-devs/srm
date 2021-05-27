import React from 'react';
import {Card, CardDeck} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../../App.css";
/**
* @author
* @function Postcard
**/

const Postcard = (props) => {
  return(
    <li>
    <Link className="blogLink" to= "/blogpage">
  <div className="postcard">   
  <Card ><div className="postcardImage"> Image
    <Card.Img variant="top" src={props.image} />
    </div>
    <Card.Body>
      <Card.Title>{props.heading}</Card.Title>
      <Card.Text>
        {props.overview}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">By - {props.author}</small>
    </Card.Footer>
  </Card>
  
  </div> 
  </Link>
  </li>
   )

 }

export default Postcard