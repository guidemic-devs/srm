import React from 'react';
import { Jumbotron , CardDeck, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Postcard from './postcard';


/**
* @author
* @function Blog
**/

const Blog = (props) => {
  return(
    <Layout>
          <Container><center><h1 className = "Heading">Blogs of SRM</h1></center> 
        
        <CardDeck> 
            <Postcard image="image" heading="heading" description="description" author="author" />
        </CardDeck>
        </Container>
    </Layout>
   )

 }

export default Blog;