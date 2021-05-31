import React from 'react'
import "./styles.css";

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div classname="logoNameContainer">
        <img className="logoimg" alt="logo" src={props.logo}  align="left"></img>
    <h1 className="name">{props.shopName}</h1>
    </div>
   )

 }

export default Logo