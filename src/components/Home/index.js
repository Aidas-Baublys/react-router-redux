import BlogList from './../BlogList';
import useFetch from './../../hooks/useFetch';

function Home() {
  const { payload: blogs = [], error, loading } = useFetch("http://localhost:8000/blogs");

  return (
    <section className="home">
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      <BlogList blogs={blogs} />
    </section>
  );
}

export default Home;