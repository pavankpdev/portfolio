import React from "react";
import { Button } from "reactstrap";

const SocialIcon = ({ social, margin, link }) => {
  return (
    <>
      <Button
        className={
          margin
            ? "btn-icon btn-2 rounded-circle ml-3"
            : "btn-icon btn-2 rounded-circle"
        }
        color="primary"
        type="button"
        style={{ padding: "0.625rem .75rem" }}
        href={link}
      >
        <span className="btn-inner--icon">
          <i className={`fab fa-${social} fa-2x text-secondary`} />
        </span>
      </Button>
    </>
  );
};

export default SocialIcon;
