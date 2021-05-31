import React, { useEffect, useState } from "react";
import {
  CardDeck,
  Container,
  Modal,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../actions/blogs.actions";
import Layout from "../../components/Layout";
import Postcard from "../../components/Postcard/postcard";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import Input from "../../components/UI/Input";


/**
 * @author
 * @function Blog
 **/

const Blog = (props) => {
  // const blogList = useSelector(state => state.blogs);

  const blogList = {
    blogs: [
      {
        image: blog1,
        heading: "blog1 heading",
        overview:
          "blog overview as little details about blog is mentioned here. as people can judge the content of postcard from above blog overview as little details about blog is mentioned here.",
        author: " author RO",
      },
      {
        image: blog2,
        heading: "blog2 heading",
        overview:
          "blog overview as little details about blog is mentioned here. as people can judge the content of postcard from above. It size can be long as well as short blog overview as little details about blog is mentioned here. blog overview as little details about blog is mentioned here. blog is mentioned here. as people can judge the content",
        author: "author RO2",
      },
      {
        image: blog3,
        heading: "blog3 heading",
        overview:
          "blog overview as little details about blog is mentioned here.",
        author: " author RO3",
      },
      {
        image: blog2,
        heading: "blog4 heading",
        overview: "blog overview3",
        author: " author RO3",
      },
      {
        image: blog3,
        heading: "blog5 heading",
        overview: "blog overview3",
        author: " author RO3",
      },
      {
        image: blog1,
        heading: "blog6 heading",
        overview: "blog overview3",
        author: " author RO3",
      },
    ],
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  const renderBlogs = (blogs) => {
    let myBlogs = [];
    for (let blog of blogs) {
      myBlogs.push(
        <li className="blogListItem">
          <Postcard
            image={blog.image}
            heading={blog.heading}
            overview={blog.overview}
            author={blog.author}
          />
        </li>
      );
    }
    return myBlogs;
  };

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState("");

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const values = [true];

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Blogs of SRM</h3>

              {/* {values.map((v, idx) => (
                <Button
                  key={idx}
                  className="me-2"
                  onClick={() => handleShow(v)}
                >
                  Add Blog
                  {typeof v === "string" && `below ${v.split("-")[0]}`}
                </Button>
              ))} */}
              <Button className="addButton" variant="secondary" onClick={handleShow}>Add blog</Button>
            </div>
          </Col>
        </Row>

        <CardDeck>
          {" "}
          <ul className="blogLists">{renderBlogs(blogList.blogs)}</ul>
        </CardDeck>
      </Container>

      <Modal
        dialogClassName="addModal"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Form>
          <Modal.Header closeButton>
            <Row>
              <Col>
                <Modal.Title>Add Blog</Modal.Title>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body>
          <Input
                  className="inputTitle"
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
            <Input
              className="inputOverview"
              type="text"
              value={overview}
              placeholder="Overview"
              onChange={(e) => setOverview(e.target.value)}
              as="textarea"
              rows={2}
            />
            <Input
              className="inputBody"
              type="text"
              value={body}
              placeholder="Blog Content"
              onChange={(e) => setBody(e.target.value)}
              as="textarea"
              rows={5}
            />
            {/* <Input
            className="inputBody"
            type="text" 
            value={body} 
            placeholder="Blog Content" 
            onChange = {(e)=>setBody(e.target.value)} /> */}
            <input type="file" name="Blog File" onChange={(e)=>setFile(e.target.files[0])}></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick="">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Blog;
