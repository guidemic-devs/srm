import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MemberCard from '../../components/MemberCard'
import Layout from '../../components/Layout'
import SearchBox from '../../components/SearchBox'
import basicIco from "../../assets/basic.png"
import premiumIco from "../../assets/premium.png"
import platinumIco from "../../assets/platinum.png"

/**
* @author
* @function Member
**/



const Member = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return(
    <Layout>
          
             
          <Row style={{ display: "flex", justifyContent: "space-between", margin:"15px" }}>
          <Col md={4}>
             <center> <h3 className="Heading">Member of SMR</h3></center>
          </Col>
          <Col md={4}><SearchBox /></Col>
          <Col md={4}>
          <Button className="HeadButton" variant="secondary" onClick={handleShow}>Edit Membership</Button>
          </Col>
       </Row>
       <br/>
       <br/>
       <Row>
         <Col md={4}>
           <MemberCard logo={basicIco} membershipHead="Basic Membership" membershipTime="1 Year" membershipCost="1200"/>
         </Col>
         <br/>
         <br/>
         <Col md={4}>
         <MemberCard logo={premiumIco} membershipHead="Premium Membership" membershipTime="1 Year" membershipCost="1800"/>
         </Col>
         <br/>
         <br/>
         <Col md={4}>
         <MemberCard logo={platinumIco} membershipHead="Platinum Membership" membershipTime="1 Year" membershipCost="2400"/>
         </Col>
       </Row>
    </Layout>
   )

 }

export default Member;