// Library
import React from "react";
import { Container } from "reactstrap";
import { useLocation, Redirect } from "react-router-dom";

// Components
import NavBar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import About from "../Components/About";
import Skills from "../Components/Skills/Skills";
import Project from "../Components/Projects/Project";
import Blogs from "../Components/Blogs";

const MainPage = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchPage = searchParams.get("page");

  return (
    <>
      <NavBar />
      <Container>
        {searchPage === "About" ? (
          <About />
        ) : searchPage === "Skills" ? (
          <Skills />
        ) : searchPage === "Project" ? (
          <Project />
        ) : searchPage === "Blogs" ? (
          ( window.open(
            "https://pavanblogs.hashnode.dev/",
            '_blank'
          ))
        ) : (
          <Home />
        )}
      </Container>
    </>
  );
};

export default MainPage;
