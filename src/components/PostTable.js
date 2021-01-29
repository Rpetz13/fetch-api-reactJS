import React from "react";

const PostTable = (props) => {
  return (
    // <table className="table table-bordered table-striped">
    //   <thead className="thead-dark">
    //     <tr>
    //       <th>No</th>
    //       <th>Title</th>
    //       <th>Description</th>
    //     </tr>
    //   </thead>
    //   <tbody id="table-users">
    //     {props.postdata.length !== 0 && props.postdata.map((item,index) =>
    //       <tr key={index}>
    //         <td>{item.id}</td>
    //         <td>{item.title}</td>
    //         <td>{item.body}</td>
    //       </tr>
    //     )}
    //   </tbody>
    // </table>

    <>
      {/* Mapping array dari props */}
      {props.postdata !== 0 &&
        props.postdata.map((item, index) => {
          return (
            <div
              className="card mx-2 mt-1 mb-4"
              style={{
                minHeight: "150px",
                maxHeight: "300px",
                border: "1px solid blue",
              }}
            >
              <div className="row">
                <div
                  className="col-4 d-flex justify-content-center align-items-center bg-primary"
                  style={{ minHeight: "150px", maxHeight: "300px" }}
                >
                  <p className="card-title text-white">
                    <strong>{item.title.toUpperCase()}</strong>
                  </p>
                </div>
                <div className="col-8 d-flex align-items-center px-5 py-3">
                  <p style={{ fontSize: "18px" }}>{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PostTable;
