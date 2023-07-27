import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Counter-App-React"
          des=" A basic react app for updating the counter"
          src={projectOne}
          githubLink="https://github.com/sourabh-bhatt/Counter-App-React"
          websiteLink="https://counter-appp-reactjs.netlify.app/"
        />
        <ProjectsCard
          title="Background Color Changer"
          des=" This is a simple background changing website"
          src={projectTwo}
          githubLink="https://github.com/sourabh-bhatt/Bachgroung-Color-Change-JS"
          websiteLink="https://background-color-changer-project.netlify.app/"
        />
        <ProjectsCard
          title="Weather App"
          des=" This is a website for checking your areas weather"
          src={projectThree}
          githubLink="https://github.com/sourabh-bhatt/Weather-App"
          websiteLink="https://static-weathers-app.netlify.app/"
        />
        <ProjectsCard
          title="iNeuron Clone"
          des="Educational Website Clone"
          src={projectFour}
          githubLink="https://github.com/sourabh-bhatt/iNeuron-Clone"
          websiteLink="https://github.com/sourabh-bhatt/iNeuron-Clone"
        />
        <ProjectsCard
          title="Amazon Clone"
          des=" Amazon Clone"
          src={projectFive}
          githubLink="https://github.com/sourabh-bhatt/Amazon-Clone"
          websiteLink="https://staticamazon.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
