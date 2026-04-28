import { Link } from "react-router-dom";
import "../stylingPages/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">MENTAL INHERITANCE</div>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </nav>
  );
}