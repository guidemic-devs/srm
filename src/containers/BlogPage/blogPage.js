import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import "../../App.css";
import "./styles.css";
import SearchBox from "../../components/SearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/UI/Input";
import { useSelector } from "react-redux";
import userpic1 from "../../assets/userpic1.png"
import userpic2 from "../../assets/userpic2.png"
import userpic3 from "../../assets/userpic3.png"

/**
 * @author
 * @function BlogPage
 **/

const BlogPage = (props) => {
  // const blog = useSelector((state) => state.blog);
  // const comments = useSelector((state) => state.comments);

  const blog = {
    heading: " Blog Page Big Heading",
    author: "By Author",
    overview: "",
    content: "",
  };
  const comments = [
    { comment: "hi there i am first comment", userpic: userpic1 },
    {
      comment: "hi i am second comment big in size",
      userpic: userpic2,
    },
    {
      comment:
        "hi i am the bigest comment of this blog and my number is 3 ...hi i am the bigest comment of this blog and my number is 3 ...hi i am the bigest comment of this blog and my number is 3 ...",
      userpic: userpic3,
    },
  ];

  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [commentValue, setCommentValue] = useState("");
  const [commentBox, setCommentBox] = useState(false);

  const LikeHandler = () => {
    setLikeCount(likeCount + 1);
  };

  const commentChangeHandler = (e) => {
    setCommentValue(e.target.value);
  };

  const openCommentBox = () => {
    setCommentBox(true);
  };
  const renderAllComments = (comments) => {
    const allComments = [];
    for (let comment of comments) {
      allComments.push(
        <li className="commentList">
          <Row>
            <div className="commentContainer">
              <Col md={1}>
                <div className="userImageContainer">
                  <img alt={comment.userpic} src={comment.userpic} />
                </div>
              </Col>
              <Col md={11}>
                <div className="commentContent">{comment.comment}</div>
              </Col>
            </div>
          </Row>
        </li>
      );
    }
    return allComments;
  };

  return (
    <Layout>
      <Container style={{ backgroundColor: "white" }}>
        <SearchBox style={{ margin: "15px" }} />

        <div className="blogContainer">
          <h1 className="blogHeading">{blog.heading}</h1>
          <h5 className="blogAuthor">{blog.author} </h5>
          <p className="blogOverview">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="blogImage">
            <img src=""></img>
          </div>
          <p className="blogPara">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
          <br />
          <h6> Share this on Social Handle</h6>
          <div className="socialLinksBlogPage">
            <a href="#" class="fa fa-facebook fa-3x"></a>&nbsp;&nbsp;&nbsp;
            <a href="#" class="fa fa-twitter fa-3x"></a>
            <br />
            &nbsp;&nbsp;&nbsp;
            <a href="#" class="fa fa-instagram fa-3x"></a>
            <br />
            &nbsp;&nbsp;&nbsp;
            <a href="#" class="fa fa-google fa-3x"></a>
            <br />
            &nbsp;&nbsp;&nbsp;
            <a href="#" class="fa fa-linkedin fa-3x"></a>
            <br />
          </div>
        </div>
        <div className="LikeCommentContainer">
          <div className="LikeCommentButtonBox">
            <Row>
              <Col md={6}>
                <button onClick={LikeHandler} className="LikeButton">
                  {likeCount} <FontAwesomeIcon icon={faThumbsUp} /> Like
                </button>
              </Col>
              <Col md={6}>
                <button onClick={openCommentBox} className="CommentButton">
                  <FontAwesomeIcon icon={faComment} /> Comment {commentCount}
                </button>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          {commentBox ? (
            <div className="CommentBox">
              <Form>
                <Input
                  as="textarea"
                  rows={2}
                  type="text"
                  placeholder="Comment"
                  value={commentValue}
                  onChange={commentChangeHandler}
                />
                <Button variant="primary" type="submit" block>
                  Add
                </Button>
              </Form>
            </div>
          ) : null}
          <div>
            <ul className="commentList">{renderAllComments(comments)}</ul>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default BlogPage;
