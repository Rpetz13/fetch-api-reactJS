import React, { Component } from "react";
import axios from "axios";
import PostTable from "../components/PostTable";

class Post extends Component {
  // Simpan state
  constructor() {
    super();
    this.state = {
      post: [],
    };
  }

  // Membuat function untuk fetch data posts
  getPostData = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
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
        <div className="container text-center mt-4">
          <h1 className="mb-4 mt-4">Post</h1>
          <hr />
          <div className="row">
            <div className="col-12">
              {/* Mengirim state post ke PostTable */}
              <PostTable postdata={this.state.post} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
