import React, { Component } from "react";
import "./exp.css";
import { Fade, Flip } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <>
        {" "}
        <Fade bottom duration={2000} distance="40px">
          <>
          <div class="container">
            <center>
              <h2>Work Experience</h2>
            </center>
            <br />
            <div class="col-twelve"></div>
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3><i>Full Stack Engineer</i></h3>
                  <i>December 2020 - Present</i>
                  <br/><i>Full Time</i>
                </div>

                <div class="timeline-content">
                  <h4><i>Infosys ltd  </i></h4>
                  Deleaing with Engineering team as a Front-end and as a
                  Back-end developer uisng <br />
                  ReactJs, AngulatJs and SpringBoot
                  <br /><br />
                  <p>
                    Client : <i>HSBC</i> (Hongkong and Shanghai Banking
                    Corporation) 6th largest multinational
                    <br /> investment bank and financial services holding
                    company
                  </p>
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3><i>Automation Tester (QA)</i></h3>
                  <i>August 2020 - December 2020</i>
                  <br/><i>Trainee</i>
                </div>

                <div class="timeline-content">
                  <h4><i>Infosys ltd</i></h4>
                  Worked with Selenium and Java to automate my Work <br />Also i created a
                  new way of automation 
                  that successfully reduce the work effort by half
                  <br /><br />
                  Client : <i>FORD</i> (Ford Motor Company Automaker company)
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3><i>Java Software Developer</i></h3>
                  <i>October 2019 - January 2020</i>
                  <br/><i>Intership</i>
                </div>

                <div class="timeline-content">
                  <h4><i>SanthiSoft Technology</i></h4>
                  <p>
                    Worked as a Java Software Developer in SanthiSoft as an Intern as a part of my final <br />year project and documentation<br /> 
                  </p>
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3><i>Spftware and Web Developer</i></h3>
                  <i>August 2018 - October  2019</i><br /><i>Part Time</i>
                </div>

                <div class="timeline-content">
                  <h4><i>FreeLancer</i></h4>
                  
                  <p>
                    Works as a freeLancer specialized in Java and Web Development. Mainly
                    deals <br />with creating, hosting and
                    <br /> maintaining the websites with online database access.
                  </p>
                </div>
              </div>
            </div></div>
          </>
        </Fade>
        
      </>
    );
  }
}

export default ExperienceAccordion;
