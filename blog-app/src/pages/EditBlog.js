import { useParams } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { blogActions } from "../store/blog-reducer";

const EditBlog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const blog = useSelector((state) => {
    return state.blogs.find((blog) => blog.id === Number(params.blogId));
  });
  const submitHandler = (data) => {
    data = { ...data, id: blog.id };
    dispatch(blogActions.updateBlog(data));
    history.push("/");
  };
  const cancelHandler = () => {
    history.push("/");
  };

  if (!blog) {
    return <p>No Blog Found With ID {params.blogId}</p>;
  }
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
          <BlogForm
            blog={blog}
            onFormSubmit={submitHandler}
            onFormCancel={cancelHandler}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditBlog;
