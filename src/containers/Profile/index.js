import React, { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./styles.css";
import profilePhoto from "../../assets/Photo.jpg";
import lcssLogo from "../../assets/LCSS.png";
import SearchBox from "../../components/SearchBox";


/**
 * @author
 * @function Profile
 **/

const Profile = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      
        <Row style={{display: "flex", justifyContent: "space-between", margin:"15px"}}>
          <Col className="col1" md={4}>
           <center>
              <h3 className="Heading">Profile</h3>
              </center>
          </Col>
          <Col md={4}><SearchBox /></Col>
          <Col md={4}>
            &nbsp;
            <center>
            <Button
                className="HeadButton"
                variant="secondary"
                onClick={handleShow}
              >
                Edit Profile
              </Button>
              </center>
              </Col>
              </Row>
              <br/>
              <br/>
              <Container>
        <Row className="row">
          <Col md={6}>
            <div className="profileContainer">
              <Row>
                <Col md={4}>
                  <div className="pictureContainer">
                    <a href="#" className="pictureLink">
                      <img src={profilePhoto}></img>
                    </a>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="Details">
                    <h4>Personal Details: </h4>
                    <table className="border">
                      <tr>
                        <td>
                          <h6>Name:</h6>
                        </td>
                        <td className="data">
                          <span className="values">
                            aBigNameGuy bigLastName
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Username:</h6>
                        </td>
                        <td className="data">
                          <span className="values">Username12345</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Email:</h6>
                        </td>
                        <td className="data">
                          <span className="values">
                            aBigEmailId123456789@gmail.com
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Phone:</h6>
                        </td>
                        <td className="data">
                          <span className="values">1234567890</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>

              <div className="dataContainer">
                <Row>
                <Col md={8}>
                <div className="Details">
                  <h4>Profile Analytics:</h4>

                  <table className="border">
                    <tr>
                      <td>
                        <h6>Total Likes Counts:</h6>
                      </td>
                      <td className="data">
                        <span className="values">123 </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Total Comments Counts:</h6>
                      </td>
                      <td className="data">
                        <span className="values">12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Total Shares Counts:</h6>
                      </td>
                      <td className="data">
                        <span className="values">4</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Membership:</h6>
                      </td>
                      <td className="data">
                        <span className="values">
                          None or Gold or Diamond or Platinum
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
                </Col>
                
                <Col md={4}>
                <div className="logoContainer">
                      <img src={lcssLogo} alt="logo" />
                  </div>
                </Col>
                </Row>
              </div>
            </div>
          </Col>
          <div className="gap"></div>
          <Col className="col2" md={6}>
            <div className="referearnContainer">
              <center>
                <div className="referralCodeContainer">
                  <h6>Earning Money Was Never So Easy.</h6>
                  <h6>
                    Per Successful Referral You Will Get{" "}
                    <span className="values">$1</span>
                  </h6>
                  <h6>
                    Referral Code for your Account is below. Refer it by copying
                    and sending it to your friend or family. Or you can share it
                    on social media via link...
                  </h6>
                </div>
                <div className="shareButtonsContainer">
                  <input
                    style={{ width: "65px" }}
                    type="text"
                    value="AXCT25"
                  ></input>
                  <div className="socialMediaLinks">
                    <a href={props.fblink} class="fa fa-facebook fa-5x"></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href={props.twitterLink} class="fa fa-twitter fa-5x"></a>
                    <br />
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href={props.instagaramLink}
                      class="fa fa-instagram fa-5x"
                    ></a>
                    <br />
                    &nbsp;&nbsp;&nbsp;
                    <a href={props.googleLink} class="fa fa-google fa-5x"></a>
                    <br />
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href={props.whatsappLink}
                      class="fa fa-whatsapp fa-5x"
                    ></a>
                    <br />
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href={props.linkedinLink}
                      class="fa fa-linkedin fa-5x"
                    ></a>
                    <br />
                  </div>
                </div>
                <h4 style={{ margin: "20px" }}>
                  Your Earning: <span className="values">Earnings</span>
                </h4>
                <p>
                  **Please Follow Honesty. Only Genuine Referal Will Be Awarded
                </p>
              </center>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <center>
              <div className="blogDetails">
                <Button style={{ marginTop: "50px" }} href="/blog/user">
                  My Blogs
                </Button>
              </div>
            </center>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Layout>
  );
};

export default Profile;
