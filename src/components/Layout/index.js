import React from 'react'
import Footer from '../Footer';
import Header from "../Header";
import logoimg from "../../assets/logo.png"

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
<>
<Header 
shopName ="SMR"
shopLogo ={logoimg}
/>
{props.children}
<Footer />

</>
   )

 }

export default Layout;
