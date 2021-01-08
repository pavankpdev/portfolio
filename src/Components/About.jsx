import React from "react";
import {} from "reactstrap";

const About = () => {
  return (
    <>
      <div className="mt-4">
        <h2
          className="px-3 bg-primary text-secondary font-weight-800"
          style={{ width: "fit-content" }}
        >
          About Me
        </h2>
        <div className="mr-3">
          <p className="lead text-primary text-justify">
            Hi, I'm Pavan from Bangalore, India. I'm a full-stack JavaScript
            developer with over one year of experience, also I work with DevOps.
            I'm pursuing my Bachelor's degree in Information Science and
            Engineering at Dayananda Sagar Institutes, Bangalore. I like to
            write and read about tech, stocks, start-ups, etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
