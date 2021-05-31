import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import LinkCards from "../../components/LinkCards";
import profileImg from "../../assets/Profile.jpg";
import memberImg from "../../assets/Member.jpg";
import moneyImg from "../../assets/Money.jpg";
import readBlogImg from "../../assets/Read.jpg";



/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout>
      <Container>
        <center>
          <h1 className="Heading">Welcome to SRM</h1>
        </center>
        <LinkCards 
        link1="/signup"
        link2="/profile"
        link3="/refer"
        link4="/blog"
        heading1="Create Your Profile Now and Enjoy..." 
        heading2="Become a Member and Access All Features..."
        heading3="Want to earn Money, then join with us..."
        heading4="Read Unlimited Free Blogs Here..."
        img1={profileImg}
        img2={memberImg}
        img3={moneyImg} 
        img4={readBlogImg} 
        />
        
      </Container>
    </Layout>
  );
};

export default Home;
