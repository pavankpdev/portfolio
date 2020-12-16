import React from "react";

import Icon from "./SkillsIcons";
const Skills = () => {
  return (
    <>
      <div className="mt-4">
        <h1
          className="bg-primary text-secondary display-2"
          style={{ width: "fit-content" }}
        >
          Application
        </h1>
        <div className="d-flex flex-wrap mt-5">
          <Icon
            src="https://ik.imagekit.io/fc12s0pxv9m/New_Folder/react_aVN1wa99bl.png"
            alt="react"
            width="40"
            name="React"
            margin
          />
          <Icon
            src="https://ik.imagekit.io/fc12s0pxv9m/New_Folder/nodejs_vb170nDuI.png"
            alt="node js"
            margin
            width="60"
            name="NodeJs"
          />
          <Icon
            src="https://ik.imagekit.io/fc12s0pxv9m/New_Folder/express_psVaJ_Tqp4.png"
            alt="express js"
            margin
            width="60"
            name="Express JS"
          />
          <Icon
            src="https://ik.imagekit.io/fc12s0pxv9m/New_Folder/mongo_gb3mcDlx9b.png"
            alt="mongo db"
            width="30"
            name="Mongo DB"
          />
        </div>
        <h1
          className="bg-primary text-secondary display-2 mt-4"
          style={{ width: "fit-content" }}
        >
          DevOps
        </h1>
        <div className="d-flex mt-5">
          <Icon
            src="https://ik.imagekit.io/fc12s0pxv9m/New_Folder/docker_bOST9wjqR.png"
            alt="docker"
            width="80"
            name="Docker"
            margin
          />
          <Icon
            src="https://ik.imagekit.io/fc12s0pxv9m/New_Folder/travis_tyeR8ffneO.png"
            alt="CICD"
            width="80"
            name="CICD (Travis CI)"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
