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
        <div className="d-flex mt-5">
          <Icon
            src="https://png2.cleanpng.com/dy/4210193738902e6dbbc3807d76c60c2c/L0KzQYm3VMA2N6Z7j5H0aYP2gLBuTfdidZYyitdqY4SwfrL7igZmNZtmjtN8Y4LsgMW0gf5lepDufJ95aIn2ebT6TcVia2dpTdgAMUi6SbaBTsY3OmQ5Tqc6MUW1QoqBUMM1OWI1SKU3cH7q/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png"
            alt="react"
            width="40"
            name="React"
          />
          <Icon
            src="https://png2.cleanpng.com/dy/9e7559512df12d697db3fb6d9cb896ea/L0KzQYm3VME3N51uiZH0aYP2gLBuTf5wbJYyguU2anH5ccTqkvlxfF54feRBZYKwg7rrhb10a6NuiOZybnewgsbpmb02aZU5fdYDNXLnRoTtUb40PGQ5TaI9MkG4QoSCUMM5P2g8T6cDLoDxd1==/kisspng-node-js-javascript-server-side-scripting-ruby-5ad4ed85bd63f1.3434504215239038777758.png"
            alt="node js"
            margin
            width="60"
            name="NodeJs"
          />
          <Icon
            src="https://png2.cleanpng.com/dy/5985fe4d5b35ae863751b5f381926eaa/L0KzQYm3VsA2N6loeZH0aYP2gLBuTf1maZ8yi9H1dYTsf7A0kCRia5wyfep5cnX2g37xk71vd5VqRdx8LXrkhrL6gCJqeKUyTdQ6NkS6crWAU8NlaWMzSKo7MEK5RYO4VcI5OWk7UKM8NEe1PsH1h5==/kisspng-mean-solution-stack-express-js-node-js-javascript-5b1647bd733da2.082026521528186813472.png"
            alt="express js"
            margin
            width="60"
            name="Express JS"
          />
          <Icon
            src="https://i.ibb.co/st7NVrD/Mongo-DB-Leaf-Full-Color-RGB.png"
            alt="mongo db"
            margin
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
            src="https://png2.cleanpng.com/dy/ce274892866b8ca317e71619527535a0/L0KzQYm3VMA5N5dqfZH0aYP2gLBuTfRwa5xqip95eYTrf7A0kB9nfKhmitc2ZHXzfLFCjfVvfF59fdRyYXzkcsS0gB9vfJJuhtd7LUXkc7K5V8Nna2ZqTtcBLkS0R4e5UcA4OWY3S6MEN0e4SYm4UMYveJ9s/kisspng-docker-python-software-deployment-xebialabs-container-5aca273fc5e6e6.4176210715231977598106.png"
            alt="docker"
            width="80"
            name="Docker"
          />
          <Icon
            src="https://png2.cleanpng.com/dy/6365f80b11bc84dc089dd25e965926eb/L0KzQYm3VMIzN6RpiZH0aYP2gLBuTgRzaadui59saT3mf7B7if52d6Z4Rdt3dHXqgrL7if9vNaR0fuZCYYLoPbP8ifxlNaR0RdV4boTsfsb2lgMufpZojNH7LUXkdLS5WMgyOZc8fdM8LkKzSIO4WMY1OWY3TKUCN0e1SYK5Wb5xdpg=/kisspng-travis-ci-continuous-integration-software-build-so-continuous-vector-5adc28811f7ea3.208218641524377729129.png"
            alt="CICD"
            margin
            width="80"
            name="CICD (Travis CI)"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
