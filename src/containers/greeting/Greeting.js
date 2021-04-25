import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Button from "../../components/button/Button";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              ><br />
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span><br />
                I am a Full Stack Engineer 
              </p>
              
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
                  <a href="https://drive.google.com/uc?export=download&id=1E8zVAoWa73sy7ZXSUKLYWqX31pmUj-PH" download>
                  <button
                  className="button1"
                >
                  My Resume
                </button>  
                  </a>
                

            </div>
                       
              <div className="resume-btn-div">
                  {/* <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />    */}
               </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
