// components are functions that return JSX.Element

import { Link } from "react-router-dom";

// i.e. a React.FC IS a function that returns JSX.Element
function Navbar(): JSX.Element {
  return (
    <nav className="nav__container">
      <ul className="nav__container ul ul__navbar">
        <li>
          <a className="links" href="home">
            Home
          </a>
        </li>
        <li>
          <Link className="links" to="/cats">
            {" "}
            Mews{" "}
          </Link>
        </li>{" "}
        <li>
          <Link className="links" to="/dogs">
            {" "}
            Woof{" "}
          </Link>
        </li>{" "}
        <li>
          <a className="links" href="contact">
            Contact
          </a>
        </li>
        <li>
          <a className="links" href="https://www.cats.org.uk/sponsor">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
