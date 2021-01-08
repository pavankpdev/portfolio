import React from "react";
import { Col } from "reactstrap";

const BlogCard = ({ url, title, image }) => {
  return (
    <>
      <Col lg="5">
        <div className="blog_holder">
          <a href={url} target="_blank" rel="noreferrer">
            <img alt="Serverless blog" src={image} className="blog__img" />
            <h4 className="mt-2 text-primary font-weight-800">{title}</h4>
          </a>
        </div>
      </Col>
    </>
  );
};

export default BlogCard;
