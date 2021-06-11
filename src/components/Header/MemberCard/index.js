import React from 'react'
import "./memberCard.css";


/**
* @author
* @function MemberCard
**/

const MemberCard = (props) => {
  return(
    <div className="cardOuter">
        <div className="cardInner">
            <div className="cardUpper">
                <div className="memberLogoContainer">
                    <img src={props.logo} alt="MemberCard" />
                </div>
            </div>
            <div className="midLine"></div>
            <div className="cardLower">
                <div className="membershipDetails">
                    <center>
                    <h5>{props.membershipHead}</h5>
                    <h6>{props.membershipTime}</h6>
                    <h6>₹ {props.membershipCost}</h6>
                    </center>
                </div>
            </div>
            </div>        
    </div>
   )

 }

export default MemberCard