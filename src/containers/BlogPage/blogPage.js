import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";
import "../../App.css";

/**
 * @author
 * @function BlogPage
 **/

const BlogPage = (props) => {
  return (
    <Layout>
                <Container>

        <div className="blogContainer">
          <h1 className="blogHeading"> Blog Page Big Heading</h1>
          <h5 className="blogAuthor"> By Author</h5>
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
          <h5 className="blogFinisher">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h5><br />
          <h6> Share this on Social Handle</h6>
          <div className = "socialLinks">
          <a href="#" class="fa fa-facebook"></a>&nbsp;&nbsp;&nbsp;
          <a href="#" class="fa fa-twitter"></a><br/>&nbsp;&nbsp;&nbsp;
          <a href="#" class="fa fa-instagram"></a><br/>&nbsp;&nbsp;&nbsp;
          <a href="#" class="fa fa-google"></a><br/>&nbsp;&nbsp;&nbsp;
          <a href="#" class="fa fa-linkedin"></a><br/>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPage;
