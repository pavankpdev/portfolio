import React from "react";
import { Link, useLocation } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import "./Navbar.styles.scss";

const NavbarComp = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchPage = searchParams.get("page");

  return (
    <>
      <nav className="navbar_custom">
        <ul>
          <li>
            {" "}
            <Link to={{ search: "?page=Home" }}>Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={{ search: "?page=About" }}>About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={{ search: "?page=Skills" }}>Skills</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={{ search: "?page=Project" }}>Projects</Link>{" "}
          </li>
          <li>
            <a href="https://pavanblogs.hashnode.dev/" target="blank">Blogs</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavbarComp;
