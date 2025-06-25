import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">BlogApp</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/post/new">New Post</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
