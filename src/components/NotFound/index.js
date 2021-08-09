
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <span>Sorry, page not found:(</span>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default NotFound;
