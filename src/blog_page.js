import React from 'react';
import axios from 'axios';
import './blog_page.css';

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
      <div className="row">
        { this.state.blogs.map(blog =>
            <div className="leftcolumn">
              <div class="card">
                <h2>{blog.title}</h2>
                <h5>{blog.category}, {blog.author}</h5>
                <img src={blog.imgs.large} alt="image" height="200px" />
                {/* <div class="fakeimg" style="height:200px;">Image</div> */}
                <p>{blog.description}</p>
              </div>

                {/* <img src={blog.imgs.large} alt="image" />
                <div>Title: {blog.title}</div>
                <div>Author: {blog.author}</div>
                <div>Description: {blog.description}</div>
                <div>Category: {blog.category}</div>
                <img src={blog.imgs.thumb} alt="image" height="42" width="42"/> */}
            </div>
        )}
      </div>
    )
  }
}

export default BlogPage;