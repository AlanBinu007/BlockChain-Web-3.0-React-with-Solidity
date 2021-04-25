import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import mca from "../../images/ignou1.png";
import bca from "../../images/mg.png";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <>
        <br />
        <div className="degree-card">
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(50%, 50%)",
                }}
                src={mca}
                //src={require(`../../assests/images/${degree.logo_path1}`)}
                alt={degree.alt_name1}
              />
            </div>
          </Flip>
        
          <Fade right duration={2000} distance="40px">
            <div className="card-body">
              <div
                className="body-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <div className="body-header-title">
                  <h2 className="card-title" style={{ color: theme.text }}>
                    {degree.title1}
                  </h2>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    {degree.subtitle1}
                  </h3>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    Canadian Equivalency : MASTER'S DEGREE (Verifyed By{" "}
                   
                      WES
                   
                    )
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}>
                    {degree.duration1}
                  </h3>
                </div>
              </div>
              <div classname="body-content">
                <br />
                {degree.descriptions1.map((sentence1) => {
                  return (
                    <p className="content-list" style={{ color: theme.text }}>
                      <br />
                      {sentence1}
                      <br />
                    </p>
                  );
                })}
                <a
                  href={degree.website_link1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <br />
        <br />
        <br />

        <div className="degree-card">
          <Fade right duration={2000} distance="40px">
            <div className="card-body">
              <div
                className="body-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <div className="body-header-title">
                  <h2 className="card-title" style={{ color: theme.text }}>
                    {degree.title}
                  </h2>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    {degree.subtitle}
                  </h3>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    Canadian Equivalency : 4 YEAR BACHELOR'S DEGREE
                    &nbsp;(Verifyed By{" "}
                   
                      WES
                   
                    )
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}>
                    {degree.duration}
                  </h3>
                </div>
              </div>
              <div classname="body-content">
                <br />
                {degree.descriptions.map((sentence) => {
                  return (
                    <p className="content-list" style={{ color: theme.text }}>
                      <br />
                      {sentence}
                    </p>
                  );
                })}
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(50%, 50%)",
                }}
                src={bca}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        </div>
      </>
    );
  }
}

export default DegreeCard;
