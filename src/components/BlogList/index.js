import { Link } from "react-router-dom";

function BlogList({ blogs = [] }) {
  return (
    <>
      {blogs.map(blog => (
        <article key={blog.id} className="blogs">
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <span>By {blog.author}</span>
          </Link>
        </article>
      ))}
    </>
  );
}

export default BlogList;