import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { blogActions } from "../store/blog-reducer";

const NewBlog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (data) => {
    dispatch(blogActions.createBlog(data));
    history.push("/");
  };
  const cancelHandler = () => {
    history.push("/");
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="offset-9 col-3 text-right">
            <Link className="btn btn-primary mt-4 px-5" to="/">
              Back To Index
            </Link>
          </div>
        </div>
        <div className="row">
          <BlogForm onFormSubmit={submitHandler} onFormCancel={cancelHandler} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewBlog;
