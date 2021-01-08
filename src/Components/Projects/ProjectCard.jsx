import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  Col,
  Badge,
} from "reactstrap";
const ProjectCard = ({
  img,
  stack,
  redirectTo,
  redirectName,
  children,
  github,
}) => {
  return (
    <>
      <Col sm="12" md="6" lg="4">
        <Card className="mt-3">
          <CardHeader>
            {github ? (
              <Badge color="default" className="float-right">
                <a href={github} target="_blank" rel="noreferrer">
                  source code <i className="fab fa-github" />
                </a>
              </Badge>
            ) : (
              <Badge color="default" className="float-right">
                private <i className="fas fa-lock" />
              </Badge>
            )}
          </CardHeader>
          <CardImg
            top
            width="100%"
            src={img}
            alt="Card image cap"
            style={{ width: "100%", height: "75%" }}
          />
          <CardBody>
            <CardTitle tag="h5">
              <a
                href={redirectTo}
                className="text-default h5 font-weight-500 ul"
                target="_blank"
                rel="noreferrer"
              >
                {redirectName} <i className="fas fa-external-link-alt fa-xs" />
              </a>
            </CardTitle>
            <CardText>{children}</CardText>
            <p className="font-weight-600 h6">Tech Stack</p>
            {stack.map((e) => (
              <Badge key={e} color="default" className="mr-2">
                {e}
              </Badge>
            ))}
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ProjectCard;
