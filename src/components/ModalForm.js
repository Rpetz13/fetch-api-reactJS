import React from "react";

const ModalForm = (props) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {props.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Insert a title"
                  value={props.default.title}
                  onChange={props.onchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Description</label>
                <textarea
                  className="form-control"
                  name="body"
                  rows="3"
                  placeholder="Insert a desciption"
                  value={props.default.body}
                  onChange={props.onchange}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={props.onsubmit}
                >
                  Save
                </button>
                {/* <input type="submit" value="Save" className="btn btn-primary" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
