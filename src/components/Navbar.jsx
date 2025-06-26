import { Link } from 'react-router-dom';
import maventraIcon from '../assets/maventra.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-5 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">
        <div className="position-absolute start-50 translate-middle-x d-flex align-items-center gap-3">
          <img src={maventraIcon} alt="Icon" style={{ height: '85px' }} />
          <Link
            className="navbar-brand m-0 fw-bold"
            to="/"
            style={{ fontSize: '1.5rem' }}
          >
            <u>Maventra Blog App</u>
          </Link>
        </div>
        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
          <Link className="nav-link" to="/post/new">New Post</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}
