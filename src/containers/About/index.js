import React from 'react'
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import SearchBox from '../../components/SearchBox';

/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <Layout>
        

        <Row style={{ display: "flex", justifyContent: "space-between", margin:"15px" }}>
          <Col md={4}>
              <center><h3 className="Heading">About of SMR</h3></center>
          </Col>
          <Col md={4}><SearchBox /></Col>
          <Col md={4}>
          <Button className="HeadButton" variant="secondary" onClick="">Edit About</Button>
          </Col>
       </Row>
        
        
       <Container>
         </Container>
            
       
    </Layout>
   )

 }

export default About;