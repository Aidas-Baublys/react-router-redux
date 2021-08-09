import { useParams, useHistory } from "react-router-dom";

import useFetch from './../../hooks/useFetch';

function Blog() {
  const { id } = useParams();
  const { payload: blog = [], error, loading } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const onClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE"
    }).then(() => history.push("/"));
  };

  return (
    <div className="blog">
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <span>By {blog.author}</span>
          <p>{blog.body}</p>
          <button onClick={onClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default Blog;