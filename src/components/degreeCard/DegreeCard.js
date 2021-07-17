import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import mca from "../../images/ignou1.png";
import bca from "../../images/mg.png";
import q from "../../images/q.png";
import w from "../../images/w.jpg";
import z from "../../images/z.jpg";
import mit from "../../assests/images/mit.png";
import hbs from "../../assests/images/hbs.png";

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
                  transform: "scale(100%, 100%)",
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
                  <h3 className="card-title" style={{ color: theme.text }}>
                    {degree.title1}
                    <br />
                    {degree.subtitle1}
                  </h3>
                  <h3 className="card-subtitle1">
                    Canadian Equivalency : MASTER'S DEGREE (Verifyed By WES )
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
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
                    <br />
                    {degree.subtitle}
                  </h2>
                  <h3 className="card-subtitle1">
                    Canadian Equivalency : 4 YEAR BACHELOR'S DEGREE
                    &nbsp;(Verifyed By WES )
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
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
                  transform: "scale(100%, 100%)",
                }}
                src={bca}
                //src={require(`../../assests/images/${degree.logo_path1}`)}
                alt={degree.alt_name1}
              />
            </div>
          </Flip>
        </div>
        <br />
        <br />
        <br />
        <div className="degree-card">
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(100%, 100%)",
                }}
                src={mit}
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
                  <h3 className="card-title" style={{ color: theme.text }}>
                  Leading Digital Transformation in  AI, IoT and Cybersecurity
                    <br />
                    <br />
                    Online Profeestional Certificate
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />
                
                    <p className="content-list" style={{ color: theme.text }}>
                      <br />
                      ⚡ Learn to combine excellence in the application of technical capacity with interpersonal and leadership
                      
skills.
<br /><br />⚡ Deepening in the context of globalization to which we are exposed to be able to operate in this new
culture of continuous innovation.
<br /><br />⚡ Discover the five technologies that are transforming our societies and how they are doing it:
blockchain, cloud computing, AI, IoT and cybersecurity.
<br /><br />⚡ Get familiar with cloud computing and DevOps to analyze the best way to harness its potential and
achieve a secure software design, as well as efficient technological operations.
<br /><br />⚡ Develop a deeper insight about blockchain fundamentals and its practical applications.
                      <br />
                    </p>
                  
                <a
                  href="https://professional.mit.edu/"
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

        <div className="degree-card">
          <Fade right duration={2000} distance="40px">
            <div className="card-body">
              <div
                className="body-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <div className="body-header-title">
                  <h2 className="card-title" style={{ color: theme.text }}>
                  Business analytics
                  </h2>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    Online Certification Program
                  </h3>
                  <h3
                    className="card-subtitle"
                    style={{ color: theme.text }}
                  ></h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />

                <p className="content-list" style={{ color: theme.text }}>
                ⚡ Interpret data to inform business decisions<br /><br />
                ⚡ Recognize trends, detect outliers, and summarize data sets<br /><br />
                ⚡ Analyze relationships between variables<br /><br />
                ⚡ Develop and test hypotheses<br /><br />
                ⚡ Craft sound survey questions and draw conclusions from population samples<br /><br />
                ⚡Implement regression analysis and other analytical techniques in Excel<br />
                </p>

                <a
                  href="https://online.hbs.edu/"
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
                  transform: "scale(100%, 100%)",
                }}
                src={hbs}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        </div>

        <br />
        <br />
        <br />

        <div className="degree-card">
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(100%, 100%)",
                }}
                src={q}
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
                    Applied Data Science with Python
                  </h2>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    Online Specilization
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />

                <p className="content-list" style={{ color: theme.text }}>
                  <br />
                  ⚡ This Spezilization consist of 5 Sub Courses Applied Machine
                  Learning in Python, Applied Plotting, Charting & Data
                  Representation in Python, Introduction to Data Science in
                  Python, Applied Text Mining in Python, Applied Social Network
                  Analysis in Python
                  <br />
                </p>

                <p className="content-list" style={{ color: theme.text }}>
                  <br />⚡ Conduct an inferential statistical analysis Discern
                  whether a data visualization is good or bad Enhance a data
                  analysis with applied machine learning Analyze the
                  connectivity of a social network
                  <br />
                </p>

                <a
                  href="https://umich.edu/"
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
                    Machine Learning
                  </h2>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    Online Specilization
                  </h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />

                <p className="content-list" style={{ color: theme.text }}>
                  <br />⚡ This Spezilization contain 4 Sub Courses Machine
                  Learning Foundations: A Case Study Approach Machine Learning:
                  Regression, Machine Learning: Classification, Machine
                  Learning: Clustering & Retrieval
                </p>
                <p className="content-list" style={{ color: theme.text }}>
                  <br />⚡ The main skill that we can develope by this course
                  are Data Clustering Algorithms Machine Learning,
                  Classification Algorithms, Decision Tree
                </p>

                <a
                  href="https://www.washington.edu/"
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
                  transform: "scale(100%, 100%)",
                }}
                src={w}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        </div>
        <br />
        <br />
        <br />
        <div className="degree-card">
        <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(100%, 100%)",
                }}
                src={z}
                alt={degree.alt_name}
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
                    Data Science
                  </h2>
                  <h3 className="card-subtitle" style={{ color: theme.text }}>
                    Online Specilization Course
                  </h3>
                  <h3
                    className="card-subtitle"
                    style={{ color: theme.text }}
                  ></h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />

                <p className="content-list" style={{ color: theme.text }}>
                  <br />⚡ This Spezilization consist of 10 courses Data Science
                  Capstone,eveloping Data Products Practical Machine Learning
                  ,The Data Scientist’s Toolbox , Regression Models ,Exploratory
                  Data Analysis, Reproducible Research ,R Programming ,Getting
                  and Cleaning Data, Statistical Inference
                </p>
                <p className="content-list" style={{ color: theme.text }}>
                  <br />⚡ After the completion of all the course we awarded the
                  final certificte with co-operate with coursera
                </p>

                <a
                  href="https://www.jhu.edu/"
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
      </>
    );
  }
}

export default DegreeCard;
