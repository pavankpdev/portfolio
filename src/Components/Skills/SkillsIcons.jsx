import React from "react";

const SkillsIcon = (props) => {
  return (
    <>
      <div className={props.margin ? "mr-3 text-center" : " text-center"}>
        <div
          className="icon icon-shape bg-primary rounded-circle text-white mb-3"
          style={{ width: "80px", height: "80px" }}
        >
          <img alt="social handles" {...props} />
        </div>
        <h5 className="text-primary mt--3">{props.name}</h5>
      </div>
    </>
  );
};

export default SkillsIcon;
