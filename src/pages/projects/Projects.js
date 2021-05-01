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
                <i>“Success is the delivery of a product that meets expectation”</i>
              </p>

              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                <i>"If you hold a candle close to you, its flame rises. And if you hold it away from you, its flame shrinks. The same way you hold a candle close to you, keep all your plans, aspirations, projects, and dreams close to you too. Do not share your plans or goals until you complete them, because as you hold your candle away from you, your goals will shrink in the eyes of others"</i>
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
