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
            <div className="blog">
              {/* <div class="card">
                <h2>{blog.title}</h2>
                <h5>{blog.category}, {blog.author}</h5>
                <img src={blog.imgs.large} alt="image" height="200px" />
                <div class="fakeimg" style="height:200px;">Image</div>

                <p>{blog.description}</p>
              </div> */}

                <img src={blog.imgs.large} alt="image" height="400px" width="100%" />
                <h1>{blog.title}</h1>
                <img className="thumb" src={blog.imgs.thumb} alt="image" height="60px"/>
                <b>{blog.author}</b>
                <p className="date"> {blog.published_date} </p>  
                <p>{blog.category}</p>                
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                {/* <img src={blog.imgs.thumb} alt="image" height="42" width="42"/> */}
            </div>
        )}
      </div>
    )
  }
}

export default BlogPage;