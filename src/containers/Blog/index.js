import React, { useEffect } from 'react';
import { Jumbotron , CardDeck, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../../actions/blogs.actions';
import Layout from '../../components/Layout';
import Postcard from './postcard';


/**
* @author
* @function Blog
**/

const Blog = (props) => {
  // const blog = useSelector(state => state.blog);

  const blog = {
    blogs:[{
      image: "xyz.com",
      heading: "blog1",
      overview:"blog overview",
      author:"RO"
    }]
  }
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllBlogs());
  }, []);

  const renderBlogs = (blogs) => {
    let myBlogs = [];
    for (let blog of blogs){
      myBlogs.push(<li>
        <Postcard image={blog.image} heading={blog.heading} description={blog.overview} author={blog.author} />
        </li>
      )
    }
    return myBlogs;
  }

  return(
    <Layout>
          <Container><center><h1 className = "Heading">Blogs of SRM</h1></center> 
        
        <CardDeck> <ul>
              {renderBlogs(blog.blogs)}
            </ul> 
        </CardDeck>
        </Container>
    </Layout>
   )

 }

export default Blog;