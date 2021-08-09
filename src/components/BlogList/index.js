function BlogList({ blogs = [] }) {
  return (
    <>
      {blogs.map(blog => (
        <article key={blog.id} className="blog">
          <h2>{blog.title}</h2>
          <span>By {blog.author}</span>
        </article>
      ))}
    </>
  );
}

export default BlogList;