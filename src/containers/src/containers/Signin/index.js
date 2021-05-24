import React from 'react';
import Layout from "../../components/Layout";
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import Input from '../../components/UI/Input';
import "../../App.css";

/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return(
   <Layout>
     <Container><center><h1 className = "Heading">Sign In to SRM</h1></center> 
     
       <Row className="justify-content-md-center" style={{marginTop:"40px"}}>
         <Col md={{span:4, offset:0}}>
         <div className = "box">
         <Form>
         
         <Input 
            label="Email"
            placeholder = "Email"
            value=""
            type="email"
            onChange={()=>{}}
            />

<Input 
            label="Password"
            placeholder = "Password"
            value=""
            type="password"
            onChange={()=>{}}
            />
           <div className="forgotPassword"> <a href="">Forgot Password</a><br></br></div>
           
  <Button styles={{margin:"auto"}} variant="primary" type="submit" size="lg" block>
    Submit
  </Button>
  
</Form>
</div>
<center>
         <br />
       <div className="newBox">
        <p>New to SRM? <a href="">Create an Account</a></p>
      </div>
       </center>
         </Col>
       </Row>
       
      
     </Container>
   </Layout>
   
   )

 }

export default Signin