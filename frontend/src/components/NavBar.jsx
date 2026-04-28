import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Peaceful Mind</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </nav>
  );
}