import React from "react";

const PostTable = (props) => {
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div
          className="card my-3"
          style={{ minHeight: "580px", backgroundColor: "#f0f0f0" }}
        >
          <img
            className="card-img-top"
            src="https://placeimg.com/640/480/nature"
            alt="dummy"
          />
          <div className="card-body px-1">
            <h5
              className="card-title"
              style={{ height: "80px", fontSize: "16px" }}
            >
              {props.postdata.title.toUpperCase()}
            </h5>
            <hr />
            <p
              className="card-text"
              style={{ minHeight: "190px", fontSize: "16px" }}
            >
              {props.postdata.body}
            </p>
            <div className="float-right px-1">
              <button className="btn btn-outline-primary mx-1">
                <i className="far fa-edit"></i>
              </button>
              <button
                onClick={() => props.remove(props.postdata.id)}
                className="btn btn-outline-danger mx-1"
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostTable;
