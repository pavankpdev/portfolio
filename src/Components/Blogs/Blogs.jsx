import React from "react";
import { Row, Col } from "reactstrap";
import BlogCard from "./BlogCard";

import "./Blogs.scss";
const Blogs = () => {
  return (
    <>
      <h2
        className="px-3 bg-primary text-secondary font-weight-800 "
        style={{ width: "fit-content" }}
      >
        My Blogs
      </h2>
      <div className="mt-4 blog">
        <Row className="justify-content-center align-items-center">
          <BlogCard
            url="https://pavanblogs.hashnode.dev/understand-serverless-the-simple-way-1"
            title="Understand Serverless - The Simple Way"
            image="https://cdn.hashnode.com/res/hashnode/image/upload/v1610037319074/zWlg39FQk.jpeg?w=400&h=200&fit=crop&crop=entropy&auto=compress"
          />
          <BlogCard
            url="https://pavanblogs.hashnode.dev/understand-docker-the-simple-way"
            title="Understand Docker - The simple way"
            image="https://cdn.hashnode.com/res/hashnode/image/upload/v1609491859762/ptnwb-3V7.jpeg?w=400&h=200&fit=crop&crop=entropy&auto=compress"
          />
          <Col lg="2">
            <a href="https://pavanblogs.hashnode.dev/" target="_blank">
              <h4 className="text-primary font-weight-800 text-center">
                <u>View More</u>
              </h4>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Blogs;
