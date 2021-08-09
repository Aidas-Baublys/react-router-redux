import { useState } from 'react';

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [blog, setBlog] = useState("");

  return (
    <div className="create">
      <h2>Create page</h2>
      <form>
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
        <button type="submit">Add blog</button>
      </form>
    </div>
  );
}

export default Create;
