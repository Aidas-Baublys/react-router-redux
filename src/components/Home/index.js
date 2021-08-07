import { useState, useEffect } from "react";

import BlogList from './../BlogList/index';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8000/blogs");
      if (response.ok) {
        setBlogs(await response.json());
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const deleteBlog = id => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <section className="home">
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      <BlogList blogs={blogs} deleteBlog={deleteBlog} />
    </section>
  );
}

export default Home;
