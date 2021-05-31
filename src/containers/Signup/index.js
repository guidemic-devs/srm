import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import Input from '../../components/UI/Input';
import {Redirect} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {countryList } from "../../helpers/country";
import {stateList } from "../../helpers/state";
import { signup } from "../../actions";


import "../../App.css";
/**
* @author
* @function Signup

**/

const Signup = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [shop, setShop] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  const [country, setCountry] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [cityState, setCityState] = useState("");
  const [zip, setZip] = useState("");
  const[error, setError] = useState("");
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const userSignup = (e)=>{

    e.preventDefault();
  
    const user = {
      username:firstName+" " +lastName, 
      shopname:shop,
      email, 
      password, 
      dob, 
      // phone 
      userphoto:photo,
      Address:{ 
        village:address1, 
        Talluk: address2, 
        district:city, 
        state:cityState,
        pincode:zip,
        // country
    },
    }
    dispatch(signup(user));
  
  }
  
  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }
  
  if(user.loading){
    return <p>Loading...!</p>
  }


  return(

    <div><Layout>
    <Container>
    <center><h1 className = "Heading">Sign Up to SRM</h1></center> 
      <Row style={{marginTop:"40px"}}>
        <Col md={{span:6, offset:3}}>
        <div className = "box">
        <Form onSubmit = {userSignup}>
          <Row>
            <Col md={6}>
            <Input
                      label="First Name"
                      placeholder="First Name"
                      value={firstName}
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      value={lastName}
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>
                <Input
                  label="Shop Name"
                  placeholder="Shop Name"
                  value={shop}
                  type="text"
                  onChange={(e) => setShop(e.target.value)}
                />
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

<Input 
            label="Date Of Birth"
            placeholder = "DOB"
            value={dob}
            type="date"
            onChange={(e)=>setDob(e.target.value)}
            />


            <Input 
            label="Phone Number"
            placeholder = "Phone Number"
            value={phone}
            type="number"
            onChange={(e)=>setPhone(e.target.value)}
            />

<Form.Group>
    <Form.File value={photo} onChange={(e)=> setPhoto(e.target.file)} id="exampleFormControlFile1" label="Select Photo" />
  </Form.Group>

           <Form.Label>Select Country</Form.Label> 

           <Form.Control value={country} onChange={(e)=>setCountry(e.target.value)} as="select">
           {countryList()}
           </Form.Control>
            

            <br></br>
  
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="House Number" 
                  value={address1}
                  type="text"
                  onChange={(e)=>setAddress1(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor"
                  value={address2}
                  type="text"
                  onChange={(e)=>setAddress2(e.target.value)} />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control 
      placeholder="City"
      value={city}
      type="text"
      onChange={(e)=>setCity(e.target.value)} 
       />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control value={cityState} onChange={(e)=>setCityState(e.target.value)} as="select" defaultValue="Choose...">
      {stateList()}
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control 
      placeholder="zip"
      value={zip}
      type="text"
      onChange={(e)=>setZip(e.target.value)} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I Accept The Terms And Conditions" />
  </Form.Group>

 <Button variant="primary" type="submit" size="lg" block>
   Submit
 </Button>
</Form>
</div>
        </Col>
      </Row>
    </Container>
  </Layout>
        
    </div>
   )

 }

export default Signup
