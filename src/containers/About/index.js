import React, { useState } from "react";
import { Button, Col, Modal, Row, Form } from "react-bootstrap";
import Layout from "../../components/Layout";
import SearchBox from "../../components/SearchBox";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./style.css";
import "../../App.css";
import Input from "../../components/UI/Input";

/**
 * @author
 * @function About
 **/

 

const About = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");

  const aboutChangeHandler = (e) => {
    setAbout(e.target.value);
  }
  const contactChangeHandler = (e) => {
    setContact(e.target.value);
  }

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  return (
    <Layout>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px",
        }}
      >
        <Col md={4}>
          <center>
            <h3 className="Heading">About of SMR</h3>
          </center>
        </Col>
        <Col md={4}>
          <SearchBox />
        </Col>
        <Col md={4}>
          <Button className="HeadButton" variant="secondary" onClick={handleShow1}>
            Edit About
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="parentRow">
        <Col md={6}>
          <div className="aboutData">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="mapContainer">
            <Map google={props.google} zoom={14} style = {{
  width: '100%',
  height: '100%'
}}>
              <Marker onClick="{onMarkerClick}" name={"Current location"} />

              <InfoWindow onClose="{onInfoWindowClose}">
                <div>{/* <h1>{state.selectedPlace.name}</h1> */}</div>
              </InfoWindow>
            </Map>
            Map Container
          </div>
        </Col>
      </Row>
      <br />

      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px",
        }}
      >
        <Col md={4}>
          <center>
            <h3 className="Heading">Contact of SMR</h3>
          </center>
        </Col>
        <Col md={4}>
        </Col>
        <Col md={4}>
          <Button className="HeadButton" variant="secondary" onClick={handleShow2}>
            Edit Contact
          </Button>
        </Col>
      </Row>
<br/>
<br/>
      <Row className="parentRow">
        <Col md={6}>
          <div className="box" style={{backgroundColor:"white"}}>
            <h5>Form to get in touch</h5>
          <Form onSubmit = "">
          <Input 
            label="Name"
            placeholder = "Name"
            value={name}
            type="text"
            onChange={(e)=>setName(e.target.value)}
            />
         
         <Input 
            label="Email"
            placeholder = "Email"
            value={email}
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            />

<Input 
            label="Phone Number"
            placeholder = "Number"
            value={number}
            type="text"
            pattern="[0-9]*"
            onChange={(e)=>setNumber(e.target.value)}
            />
           <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I Agree to get Contacted via Above Details" />
  </Form.Group>
           
  <Button styles={{margin:"auto"}} variant="primary" type="submit" size="lg" block>
    Submit
  </Button>
  
</Form>
          </div>
        </Col>
        <Col md={6}>
          <div className="contactData">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </Col>
      </Row>

      <div></div>

      <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Edit About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input as="textarea" rows={6} label="About" type="text" value="" onChange={aboutChangeHandler} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose1}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input as="textarea" rows={6} label="Contact" type="text" value="" onChange={contactChangeHandler} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose2}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </Layout>
  );
};

// export default About;

export default GoogleApiWrapper({
  apiKey: "AIzaSyBjAW1_HLRMTPMMQHeFbWQycss5WX4HxUw",
})(About);
