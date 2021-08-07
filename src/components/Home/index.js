import { useState } from "react";

import BlogList from './../BlogList/index';

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "Tits", body: "Tits are great", author: "Jo", id: 1 },
    { title: "Boobs", body: "Awesome boobs", author: "Po", id: 2 },
    { title: "Breasts", body: "Drooly drool drool", author: "Lo", id: 3 },
  ]);

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
