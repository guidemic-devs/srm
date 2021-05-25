import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Blog
**/

const Blog = (props) => {
  return(
    <Layout>
        <Jumbotron style= {{margin:"5rem", background : "#ffffff"}} className = "text-center">
            <h1>Blog of SRM</h1>
        </Jumbotron>
    </Layout>
   )

 }

export default Blog;