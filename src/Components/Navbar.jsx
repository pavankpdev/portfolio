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

const NavbarComp = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchPage = searchParams.get("page");

  return (
    <>
      <Navbar
        className="navbar-horizontal navbar-dark bg-transparent"
        expand="lg"
      >
        <Container>
          <NavbarBrand>
            <h1 className="display-3 font-weight-700 text-primary">KP</h1>
          </NavbarBrand>
          <button
            aria-controls="navbar-default"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-default"
            data-toggle="collapse"
            id="navbar-default"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-default">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <h1 className="font-weight-700">KP</h1>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-default"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-default"
                    data-toggle="collapse"
                    id="navbar-default"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-lg-auto" navbar>
              <NavItem>
                <Link to={{ search: "?page=Home" }}>
                  <NavLink className="cursor" active={searchPage === "Home"}>
                    Home
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={{ search: "?page=About" }}>
                  <NavLink className="cursor" active={searchPage === "About"}>
                    About Me
                  </NavLink>{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link to={{ search: "?page=Skills" }}>
                  <NavLink className="cursor" active={searchPage === "Skills"}>
                    My Skill set
                  </NavLink>{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link to={{ search: "?page=Project" }}>
                  <NavLink className="cursor" active={searchPage === "Project"}>
                    My Projects
                  </NavLink>{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link to={{ search: "?page=Blogs" }}>
                  <NavLink className="cursor" active={searchPage === "Blogs"}>
                    My Blogs
                  </NavLink>{" "}
                </Link>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
