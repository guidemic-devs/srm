import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import LinkCards from "../../components/LinkCards";
import profileImg from "../../assets/Profile.jpg";
import memberImg from "../../assets/Member.jpg";
import moneyImg from "../../assets/Money.jpg";
import readBlogImg from "../../assets/Read.jpg";
import likeImg from "../../assets/Like.jpg";
import shareImg from "../../assets/Share.jpg";
import commentImg from "../../assets/Comment.jpg";
import categoryImg from "../../assets/Category.jpg";
import "./styles.css";
import SearchBox from "../../components/SearchBox";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout>
     
      <Row style ={{margin:"15px", display: "flex", justifyContent: "space-between" }}>
          <Col md={6}>
            <center>
              <h3 className="Heading">Home of SMR</h3>
              </center>
          </Col>
          <Col md={6}>
          <SearchBox />
          </Col>
        </Row>
        <Container>
        <div>
   
          <Row>
          <LinkCards link="/signup" heading="Create Your Profile Now and Enjoy..." img={profileImg} />
          <LinkCards link="/profile" heading="Become a Member and Access All Features..." img={memberImg} />
          <LinkCards link="/refer" heading="Want to earn Money, then join with us..." img={moneyImg} />
          <LinkCards link="/blog" heading="Read Unlimited Free Blogs Here..." img={readBlogImg} />
          <LinkCards link="/mostliked" heading="Read from Most Liked Blogs..." img={likeImg} />
          <LinkCards link="/mostshared" heading="Read from Most Shared Blogs..." img={shareImg} />
          <LinkCards link="/mostcommented" heading="Read from Most Commented Blogs..." img={commentImg} />
          <LinkCards link="/category" heading="Read from All Categories Blogs..." img={categoryImg} />
          </Row>
        </div>

      </Container>
    </Layout>
  );
};

export default Home;
