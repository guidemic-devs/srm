import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {Container, NavLink, Form, Row, Col, Button} from "react-bootstrap";
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect, Link} from "react-router-dom";
import {login} from "../../actions";

import "../../App.css";

/**
* @author
* @function Signin
**/

const Signin = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]= useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
   const user ={ 
     email, 
     password
    };
     dispatch(login(user));  
  }

  if(auth.authenticate) {
    return <Redirect to ={'/'}/>
  }

  return(
   <Layout>
     <center><h1 className = "Heading">Sign In to SRM</h1></center>
     <Container> 
     
       <Row className="justify-content-md-center" style={{marginTop:"40px"}}>
         <Col md={{span:4, offset:0}}>
         <div className = "box">
         <Form onSubmit = {userLogin}>
         
         <Input 
            label="Email"
            placeholder = "Email"
            value={email}
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            />

<Input 
            label="Password"
            placeholder = "Password"
            value={password}
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
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
        <p>New to SMR? <Link to="/signup">
              Signup
            </Link></p>
      </div>
       </center>
         </Col>
       </Row>
       
      
     </Container>
   </Layout>
   
   )

 }

export default Signin