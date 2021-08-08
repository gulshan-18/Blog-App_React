import React from "react";
import { useSelector } from "react-redux";
import BlogSummary from "../components/BlogSummary";
import { Link, useHistory } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const history = useHistory();
  const clickHandler = (id) => {
    history.push(`/${id}`);
  };

  const blogList = blogs.map((blog) => (
    <BlogSummary onClick={clickHandler} key={blog.id} blog={blog} />
  ));

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="offset-9 col-3 text-right">
            <Link className="btn btn-primary px-5 my-4 mr-4" to="/new">
              New post
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="offset-2 col-8">{blogList}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogList;
