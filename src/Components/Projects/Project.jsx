import React from "react";
import { Row } from "reactstrap";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <h2
        className="px-3 bg-primary text-secondary font-weight-800"
        style={{ width: "fit-content" }}
      >
        My Projects
      </h2>
      <Row className="mt-4">
        <ProjectCard
          img="https://ik.imagekit.io/fc12s0pxv9m/Mask_Group_7_Gkfd80irz.png"
          redirectTo="https://pkborewells.in/"
          redirectName="pkborewells"
          stack={["React", "Firebase"]}
        >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </ProjectCard>
        <ProjectCard
          img="https://ik.imagekit.io/fc12s0pxv9m/Mask_Group_4_LUuecTG4c.png"
          redirectTo="http://movietown.herokuapp.com/"
          redirectName="movietown"
          stack={[
            "React",
            "Nodejs",
            "MongoDB",
            "Google maps API",
            "razorpay API",
          ]}
          github="https://github.com/pavankpdev/MovieTown"
        >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </ProjectCard>
        <ProjectCard
          img="https://ik.imagekit.io/fc12s0pxv9m/Mask_Group_6_wJ-VHAtD3f.png"
          redirectTo="https://shoppyapp.live/"
          redirectName="shoppyapp"
          stack={[
            "React",
            "Nodejs",
            "Django",
            "MySQL",
            "serverless",
            "docker",
            "razorpay API",
          ]}
          github="https://github.com/pavankpdev/Shoppy"
        >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </ProjectCard>
      </Row>
    </>
  );
};

export default Projects;
