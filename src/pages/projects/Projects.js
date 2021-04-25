import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import ProjectCard from "../../components/ProjectCard/ProjectCard";



function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <a href="https://github.com/AlanBinu007" target="_blank">
                  <button
                  className="button1"
                >
                  Explore More (GitHub)
                </button>  
                  </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
