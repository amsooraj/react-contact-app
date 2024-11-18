import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark"
        data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">Navbar</Link>
          <ul className="navbar-nav mx-3">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/favorite">Favorite</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
