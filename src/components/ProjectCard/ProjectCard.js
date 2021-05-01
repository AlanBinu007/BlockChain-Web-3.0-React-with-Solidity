import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";


export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  if(repo.live != ""){
    return (
      <div>
        <Fade bottom duration={2000} distance="40px">
          <div
            {...styles}
            key={repo.id}
            //onClick={() => openRepoinNewTab(repo.url)}
            style={{ backgroundColor: theme.projectCard }}
          >
            <div className="repo-name-div">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>
            <div className="repo-details">
              <ProjectLanguages logos={repo.languages} />
              
            </div>
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.tech}
            </p>
            
            <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="visit-btn"
                      style={{ backgroundColor: theme.imageHighlight }}
                    >
                      <p className="btn" style={{ color: theme.dark }}>
                        Code
                      </p>
                    </div>
                  </a>
            <a
                    href={repo.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="visit-btn"
                      style={{ backgroundColor: theme.headerColor }}
                    >
                      <p className="btn" style={{ color: theme.text }}>
                        Live
                      </p>
                    </div>
                  </a>
                 
          </div>
        </Fade>
        <br/><br/>  
      </div>
    );
  }
  else {
    return (
      <div>
        <Fade bottom duration={2000} distance="40px">
          <div
            {...styles}
            key={repo.id}
            //onClick={() => openRepoinNewTab(repo.url)}
            style={{ backgroundColor: theme.projectCard }}
          >
            <div className="repo-name-div">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>
            <div className="repo-details">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.tech}
            </p>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="visit-btn"
                      style={{ backgroundColor: theme.imageHighlight }}
                    >
                      <p className="btn" style={{ color: theme.dark }}>
                        Code
                      </p>
                    </div>
                  </a>
          </div>
        </Fade>
      </div>
    );
  }

  
}
