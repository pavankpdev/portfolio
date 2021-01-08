// Library
import React from "react";
import { Container } from "reactstrap";

// Components
import Home from "../Components/Home/Home";
import About from "../Components/About";
import Skills from "../Components/Skills/Skills";
import Project from "../Components/Projects/Project";
import Blogs from "../Components/Blogs/Blogs";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <Container className="pt-3">
        <Home />
        <div className="about">
          <About />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="project">
          <Project />
        </div>
        <div className="blog">
          <Blogs />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
