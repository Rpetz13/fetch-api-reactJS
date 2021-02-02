import React, { Component } from "react";
import axios from "axios";
import PostTable from "../components/PostTable";

class Post extends Component {
  // Simpan state
  constructor() {
    super();
    this.state = {
      post: null,
    };
  }

  removeHandler = (data) => {
    console.log(data);
    let url = `http://localhost:3001/posts/${data}`;
    axios.delete(url).then((res) => {
      if (res.status === 200) {
        this.getPostData();
      }
    });
  };

  // Membuat function untuk fetch data posts~
  getPostData = () => {
    let url = "http://localhost:3001/posts";
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          this.setState({ post: res.data });
        }
      })
      .catch((err) => console.log(err));
  };

  // Component yang sudah di Mount
  componentDidMount() {
    this.getPostData();
  }

  // Render component
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="d-flex flex-column justify-content-center">
            <h1 className="text-center my-2">Post</h1>
            <hr />
            <button className="btn btn-success text-center my-2">
              Add Post
            </button>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                {this.state.post !== null &&
                  this.state.post.map((post) => {
                    /* Mengirim state post ke PostTable */
                    return (
                      <PostTable
                        key={post.id}
                        postdata={post}
                        remove={this.removeHandler}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
