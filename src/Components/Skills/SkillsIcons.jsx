import React from "react";
import { Button, Card, Media } from "reactstrap";

const SkillsIcon = (props) => {
  return (
    <>
      {/* <Button
        className={
          margin
            ? "btn-icon btn-2 rounded-circle ml-3"
            : "btn-icon btn-2 rounded-circle"
        }
        color="primary"
        type="button"
        style={{ padding: "0.625rem .75rem" }}
        // href={link}
      >
        <span className="btn-inner--icon">
          <img src={img} alt={alt} style={{ width: "50px" }} />
        </span>
      </Button> */}
      <div className={props.margin ? "ml-3 text-center" : " text-center"}>
        <div
          className="icon icon-shape bg-primary rounded-circle text-white mb-3"
          style={{ width: "80px", height: "80px" }}
        >
          <img {...props} />
        </div>
        <h5 className="text-primary mt--3">{props.name}</h5>
      </div>
    </>
  );
};

export default SkillsIcon;
