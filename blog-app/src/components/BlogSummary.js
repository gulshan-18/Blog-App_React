import { Link } from "react-router-dom";

const BlogSummary = (props) => {
  const limitedContent =
    props.blog.content.length < 250
      ? props.blog.content
      : `${props.blog.content.slice(0, 250)}....`;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{props.blog.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.blog.category}</h6>
        <p className="card-text">{limitedContent}</p>
        <Link to={`/${props.blog.id}`} className="btn btn-primary px-5">
          View
        </Link>
      </div>
    </div>
  );
};

export default BlogSummary;
