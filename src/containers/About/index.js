import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <Layout>
        <Jumbotron style= {{margin:"5rem", background : "#ffffff"}} className = "text-center">
            <h1>About of SRM</h1>
        </Jumbotron>
    </Layout>
   )

 }

export default About;