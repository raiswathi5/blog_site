import React from 'react';
import axios from 'axios';
import './listing_page.css';

class ListingPage extends React.Component{
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
          <h1 className="orange"> Blog </h1>
          <hr className="orange"/>
        { this.state.blogs.map(blog =>
            <div className="leftcolumn">
              <div className="card">
                <p> {blog.published_date} <b>{blog.category}</b> </p>
                <img className="blogImg" src={blog.imgs.large} alt="image" height="160px" />
                <h3>{blog.title}</h3>
                {/* <img src={blog.imgs.large} alt="image" height="150px" /> */}
                {/* <div className="rightcolumn fakeimg" style="height:200px;">Image</div> */}
                <p>{blog.description}</p>
                <p>By <b>{blog.author}</b></p>
              </div>

                {/* <img src={blog.imgs.large} alt="image" />
                <div>Title: {blog.title}</div>
                <div>Author: {blog.author}</div>
                <div>Description: {blog.description}</div>
                <div>Category: {blog.category}</div>
                <img src={blog.imgs.thumb} alt="image" height="42" width="42"/> */}
                <hr/>
            </div>
            
        )}
      </div>
    )
  }
}

export default ListingPage;