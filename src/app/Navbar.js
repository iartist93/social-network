import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <Link to="/">
          <h1>The Social Network</h1>
        </Link>

        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  );
};
