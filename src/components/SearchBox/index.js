import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import searchicon from "../../assets/search.png";
import Dictaphone from '../Dictaphone';
import "./style.css";

/**
* @author
* @function SearchBox
**/

const SearchBox = (props) => {

  const [searchText, setSearchText] = useState("");
  const [voiceText, setVoiceText] = useState(null);

  const searchTextChangeHandler = (e) => {
    setSearchText(e.target.value)
  }

  const handleCallback = (childData) =>{
    const voiceText = null;
    if(!childData){
      setVoiceText(false)
    }
    setVoiceText(voiceText || childData);
}

useEffect(()=>{if ("geolocation" in navigator) {
  console.log("Available");
} else {
  console.log("Not Available");
}} 
  , [])

  return(
    <center>
    <div><Col>
            <div className="searchbox">
              <center>
                <div className="inputBox" >
                  <Row>
            <input value={""|| searchText ||voiceText } onChange={searchTextChangeHandler} type="text" placeholder="Search"/>
            <Dictaphone parentCallback = {handleCallback}/>
            </Row>
            </div>
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