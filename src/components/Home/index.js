import { useState, useEffect } from "react";

import BlogList from './../BlogList/index';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  const deleteBlog = id => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <section className="home">
      <BlogList blogs={blogs} deleteBlog={deleteBlog} />
    </section>
  );
}

export default Home;
