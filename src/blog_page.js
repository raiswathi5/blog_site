import React from 'react';
import axios from 'axios';
class BlogPage extends React.Component{
  constructor() {
    super();
    this.state = {
        blogs: []
      }
  }

  componentDidMount() {
    axios.get(`blogs.json`)
      .then(res => {
        const blogs = res.data;
        this.setState({ blogs });
      }).catch((err)=>{
        console.log(err);
      })
  }

render() {
    return (
      <div>
        { this.state.blogs.map(blog =>
            <div>
                <img src={blog.imgs.large} alt="image" />
                <div>Title: {blog.title}</div>
                <div>Author: {blog.author}</div>
                <div>Description: {blog.description}</div>
                <div>Category: {blog.category}</div>
                <img src={blog.imgs.thumb} alt="image" height="42" width="42"/>
            </div>
        )}
      </div>
    )
  }
}

export default BlogPage;