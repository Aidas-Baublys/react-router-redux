import { useState } from 'react';
import { useHistory } from 'react-router';

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = e => {
    setLoading(true);
    e.preventDefault();
    const data = { title, body: blog, author };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      setLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Create page</h2>
      <form onSubmit={onSubmit}>
        <label>
          Title
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author
          <input
            type="text"
            required
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Blog
          <textarea
            required
            value={blog}
            onChange={e => setBlog(e.target.value)}
          />
        </label>
        {loading
          ? <button disabled>Adding...</button>
          : <button type="submit">Add blog</button>
        }
      </form>
    </div>
  );
}

export default Create;