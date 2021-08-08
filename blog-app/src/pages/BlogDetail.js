import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { blogActions } from "../store/blog-reducer";

const BlogDetail = (props) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const blog = useSelector((state) => {
    return state.blogs.find((blog) => blog.id === Number(params.blogId));
  });
  const handleLike = () => {
    dispatch(blogActions.toggleLike({ id: params.blogId }));
  };
  const handleDelete = () => {
    dispatch(blogActions.deleteBlog({ id: params.blogId }));
    history.push("/");
  };
  if (!blog) {
    return <p>No Blog Found With ID {params.blogId}</p>;
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link className="btn btn-primary px-4 mt-4" to="/">
              Back To Index
            </Link>
          </div>
          <div className="offset-3 col-6 text-right">
            <button
              className={`btn  px-5 mr-2 mt-4 ${
                blog.like ? "btn-success" : "btn-info"
              }`}
              onClick={handleLike}
            >
              {blog.like ? "Dislike" : "Like"}
            </button>
            <Link
              className="btn btn-warning px-5 mr-2 mt-4"
              to={`/${params.blogId}/edit`}
            >
              Edit
            </Link>
            <button
              className="btn btn-danger px-5 mr-2 mt-4"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{blog.category}</h6>
            <p className="card-text"> {blog.content}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogDetail;
