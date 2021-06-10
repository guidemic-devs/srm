import React from 'react';
import { Col, Row } from 'react-bootstrap';
import searchicon from "../../assets/search.png";
import "./style.css";

/**
* @author
* @function SearchBox
**/

const SearchBox = (props) => {
  return(
    <center>
    <div><Col>
            <div className="searchbox">
              <center>
            <input type="text" placeholder="Search"/>
            <button className="searchButton">
              <img className="searchIcon" src={searchicon} alt="search" />
            </button>
            </center>
            </div>
          </Col>
    </div>
    </center>
   )

 }

export default SearchBox