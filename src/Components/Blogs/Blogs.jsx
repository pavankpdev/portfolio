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
            image="https://ik.imagekit.io/fc12s0pxv9m/tr:w-400/serverless_EHTCLMjBey.jpg"
          />
          <BlogCard
            url="https://pavanblogs.hashnode.dev/understand-docker-the-simple-way"
            title="Understand Docker - The simple way"
            image="https://ik.imagekit.io/fc12s0pxv9m/tr:w-400/docker_cover_img_jzPoIWOPP.jpg"
          />
          <Col lg="2">
            <a href="https://pavanblogs.hashnode.dev/" target="_blank" rel="noreferrer">
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
