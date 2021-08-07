function BlogList({ blogs, deleteBlog }) {
  return (
    <>
      {blogs.map(blog => (
        <article key={blog.id} className="blog">
          <h2>{blog.title}</h2>
          <span>By {blog.author}</span>
          <button
            onClick={() => deleteBlog(blog.id)}
          >
            Delete this shit
          </button>
        </article>
      ))}
    </>
  );
}

export default BlogList;