import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
