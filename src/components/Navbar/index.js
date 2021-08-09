import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
      <aside className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </aside>
    </nav>
  );
}

export default Navbar;