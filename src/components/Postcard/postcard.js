import React, { useEffect } from 'react';
import {Card} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog } from '../../actions/blogs.actions';
import "../../App.css";
/**
* @author
* @function Postcard
**/



const Postcard = (props) => {

  const dispatch = useDispatch();
useEffect(() => {
  dispatch(getBlog());
}, []);

const postcardClickHandler = (data) => {

}


  return(
    <Link className="blogLink" to= "/blog/blogpage">
  <div className="postcard" >   
  <Card ><div className="postcardImage">
    <Card.Img variant="top" src={props.image} />
    </div>
    <Card.Body>
      <Card.Title>{props.heading}</Card.Title>
      <Card.Text>
        <div className="paradiv"><p>{props.overview}</p></div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">By - {props.author}</small>
    </Card.Footer>
  </Card>
  
  </div> 
  </Link>
   )

 }

export default Postcard