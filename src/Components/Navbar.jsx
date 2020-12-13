import React, { useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="navbar-horizontal navbar-dark bg-transparent" expand="lg">
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
                <NavLink className="cursor" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="cursor">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="cursor">My Skill set</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="cursor">My Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="cursor">My Blogs</NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
