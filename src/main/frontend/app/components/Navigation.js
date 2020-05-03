import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <ul className="menu-new">
      <li>
        <Link to="/creatures">HOME</Link>
      </li>
      <li>
        <Link to="/adopted">HAPPY ADOPTIONS</Link>
      </li>
      <li>
        <Link to="/adoptions/new">CREATURE SURRENDER</Link>
      </li>
      <li>
        <Link to="/pending_applications">USER LOGIN</Link>
      </li>
      <li>
        <Link to="/admin">ADMIN LOGIN</Link>
      </li>
    </ul>
  );
};

export default Navigation;