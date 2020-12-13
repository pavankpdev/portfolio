import React from "react";
import { Container, Button } from "reactstrap";

import Social from "./SocialIcon";

const Home = () => {
  return (
    <>
      <Container className="home-container">
        <div className="d-md-flex flex-row-reverse  justify-content-between align-items-center ">
          <div className="profilepic">
            <img
              src="https://ik.imagekit.io/fc12s0pxv9m/tr:w-334/IMG_0788.JPG_3-min_op0SUSI9d.jpg"
              alt="portrait"
              className="img-fluid rounded-lg img-border"
            />
          </div>
          <div>
            <h1 className="display-3 text-primary font-weight-800 ">
              <span
                className="bg-primary text-secondary font-weight-800"
                style={{ width: "fit-content" }}
              >
                Namaste,
              </span>
              I'm Pavan Kumar <br /> A Web Developer
            </h1>
            <div className="d-flex">
              <Social social="github" link="https://github.com/pavankpdev/" />
              <Social
                social="linkedin-in"
                margin
                link="https://www.linkedin.com/in/pavan-kumar-20b186181/"
              />
              <Social
                social="twitter"
                margin
                link="https://twitter.com/Mr_Pavan_Kumar3"
              />
              <Social
                social="instagram"
                margin
                link="https://www.instagram.com/pavan_leton/"
              />
            </div>
            <div className="mt-4">
              <Button color="primary">View Resume</Button>
              <Button color="primary" outline>
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
