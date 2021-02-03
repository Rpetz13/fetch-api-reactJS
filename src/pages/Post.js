import React, { Component } from "react";
import axios from "axios";
import PostTable from "../components/PostTable";
import ModalForm from "../components/ModalForm";

class Post extends Component {
  // Simpan state
  constructor() {
    super();
    this.state = {
      post: null,
      id: "",
      title: "",
      body: "",
      isUpdate: false,
    };
  }

  // Membuat function untuk get data posts~
  getPostData = () => {
    let url = "http://localhost:3001/posts?_sort=id&_order=desc";
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          this.setState({ post: res.data });
        }
      })
      .catch((err) => console.log(err));
  };

  // function untuk post data ke api
  postDataToApi = () => {
    let data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
    };
    let url = "http://localhost:3001/posts";
    axios.post(url, data).then((res) => {
      if (res.status === 201) {
        this.getPostData();
      }
    });
  };

  // function untuk put data ke api
  updateDataToApi = () => {
    let data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
    };
    let url = `http://localhost:3001/posts/${data.id}`;
    axios.put(url, data).then((res) => {
      if (res.status === 200) {
        this.getPostData();
      }
    });
  };

  // function untuk delete data ke api
  removeHandler = (data) => {
    let url = `http://localhost:3001/posts/${data}`;
    axios.delete(url).then((res) => {
      if (res.status === 200) {
        this.getPostData();
      }
    });
  };

  // function untuk memperbarui state dengan data yang akan diupdate
  updateHandler = (data) => {
    let url = `http://localhost:3001/posts/${data}`;
    axios.get(url).then((res) => {
      if (res.status === 200) {
        this.setState({
          id: res.data.id,
          title: res.data.title,
          body: res.data.body,
          isUpdate: true,
        });
      }
    });
  };

  // Merekam setiap perubahan form ke state
  handlerChange = (event) => {
    if (this.state.isUpdate === false) {
      this.setState({
        id: new Date().getTime(),
        [event.target.name]: event.target.value,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  // Submit data form
  handlerSubmit = () => {
    if (this.state.isUpdate === false) {
      this.postDataToApi();
      this.setState({
        id: "",
        title: "",
        body: "",
      });
    } else {
      this.updateDataToApi();
      this.setState({
        id: "",
        title: "",
        body: "",
      });
    }
  };

  // Merubah state isUpdate dari true ke false
  isUpdateHandler = () => {
    this.setState({
      id: "",
      title: "",
      body: "",
      isUpdate: false,
    });
  };

  // Component yang sudah di Mount
  componentDidMount() {
    this.getPostData();
  }

  // Render component
  render() {
    // Variable default untuk form
    let defaultValueForm = {
      title: this.state.title,
      body: this.state.body,
      isUpdate: this.state.isUpdate,
    };

    return (
      <>
        <div className="container mt-4">
          <div className="d-flex flex-column justify-content-center">
            <h1 className="text-center my-2">Post</h1>
            <hr />
            <button
              className="btn btn-success text-center my-2"
              data-toggle="modal"
              data-target="#staticBackdrop"
              onClick={() => this.isUpdateHandler()}
            >
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
                        update={this.updateHandler}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <ModalForm
          onchange={this.handlerChange}
          onsubmit={this.handlerSubmit}
          default={defaultValueForm}
        />
      </>
    );
  }
}

export default Post;
