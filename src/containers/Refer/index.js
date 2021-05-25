import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Refer
**/

const Refer = (props) => {
  return(
    <Layout>
        <Jumbotron style= {{margin:"5rem", background : "#ffffff"}} className = "text-center">
            <h1>Welcome to Refer and Earn SRM</h1>
        </Jumbotron>
    </Layout>
   )

 }

export default Refer;