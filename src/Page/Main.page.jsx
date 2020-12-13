// Library
import React from "react";
import { Container } from "reactstrap";

// Components
import NavBar from "../Components/Navbar";
import Home from "../Components/Home/Home";

const MainPage = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Home />
      </Container>
    </>
  );
};

export default MainPage;
