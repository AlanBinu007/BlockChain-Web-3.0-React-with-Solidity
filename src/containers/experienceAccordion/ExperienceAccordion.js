import React, { Component } from "react";
import "./exp.css";
import { Fade, Flip } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <>
        <Fade bottom duration={2000} distance="40px">
          
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
                    <h3>
                      <i>Infosys ltd</i>
                    </h3>
                    <i>August 2020 - Present</i>
                    <br />
                    <i>Full Time</i>
                  </div>

                  <div class="timeline-content">
                  <h3>
                      <i>Full Stack Engineer</i>
                      
                    </h3>
                    <i>December 2020 - Present</i>
                    <br />
                    <i>Full Time</i><br /><br />
                    Deleaing with Engineering team as a Front-end and as a
                    Back-end developer<br /> uisng
                    ReactJs, AngulatJs and SpringBoot
                    <br />
                    <br />
                    <p>
                      Client : <i>HSBC</i> (Hongkong and Shanghai Banking
                      Corporation) 6th largest <br />multinational
                       investment bank and financial services holding
                      company
                    </p>
                  </div>
                </div>

                <div class="timeline-block">
                  {/* <div class="timeline-ico">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div> */}

                  {/* <div class="timeline-header">
                    <h3>
                      <i>Automation Tester (QA)</i>
                    </h3>
                    <i>August 2020 - December 2020</i>
                    <br />
                    <i>Trainee</i>
                  </div> */}

                  <div class="timeline-content">
                  <h3>
                      <i>Automation Tester</i>
                      
                    </h3>
                    <i>August 2020 - December 2020</i>
                    <br />
                    <i>Trainee</i><br /><br />
                    Worked with Selenium and Java to automate my Work 
                    Also i created a new <br /> way of automation that successfully
                    reduce the work effort by half
                    <br />
                    <br />
                    Client : <i>FORD</i> (Ford Motor Company Automaker company)
                    <br />
                  </div>
                </div>
                <div class="timeline-block">
                  <div class="timeline-ico">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                      <i>SanthiSoft Technology</i>
                    </h3>
                    <i>November 2019 - march 2020</i>
                    <br />
                    <i>Intership</i>
                  </div>

                  <div class="timeline-content">
                    
                    <h3>
                      <i>Software Developer</i>
                      
                    </h3>
                    
                    <p>Santhisoft is a software product development company in Kerala, India, incorporated <br />in 2005 and is managed by CMI congregation.</p>
                    <p>
                      I worked as a Java Software Developer in SanthiSoft as an
                      Intern as a part <br />of my final
                      year project and documentation
                      <br />
                    </p>
                  </div>
                </div>

                <div class="timeline-block">
                  <div class="timeline-ico">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                      <i>Web Tech Solutions</i>
                    </h3>
                    <i>August 2018 - October 2019</i>
                    <br />
                    <i>CEO & Founder</i>
                  </div>

                  <div class="timeline-content">
                   
                    <h3>
                      <i>Web Developer</i>
                      
                    </h3>
                    <i>August 2018 - October 2019</i>
                    <br />
                    <i>Self-Employed</i><br /><br />

                    <p>
                      Works as a freeLancer specialized in Web Development.
                      Mainly deals <br />
                      with creating, hosting and
                      <br /> maintaining the websites with online database
                      access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <center>
                <h2><i>Volunteer Experience</i></h2>
              </center>
              <br />
              <div class="col-twelve"></div>
              <div class="timeline-wrap">
                <div class="timeline-block">
                  <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                      <i>Software Support Volunteer</i>
                    </h3>
                    <i>February 2019</i>
                    <br />
                    
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <i>Santhigiri Institude Of Management, Vazhithala</i>
                    </h3>
                    Volunteered as a Software Support in a Mega Job Fair with consist of 50+<br /> companies and 2500+ Candidates
                    <br />
                    <br />
                  </div>
                </div>

                <div class="timeline-block">
                  <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                      <i>Seminar Co-ordinator</i>
                    </h3>
                    <i>October 2019 </i>
                    <br />
                    
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <i>Santhigiri College of Computer Sciences, Vazhithala</i>
                    </h3>
                    I carry out one of the role for taking an excel project/seminar for our junior <br />students in my college as a foundation step for their career
                    <br />
                    
                  </div>
                </div>
                <div class="timeline-block">
                  <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                      <i>Computer Hardware <br />Explanation</i>
                      <i>and Assembly</i>
                    </h3>
                    <i>August 2018</i>
                    <br />
                  </div>
                  <div class="timeline-content">
                    <h3>
                      <i>Santhigiri College of Computer Sciences, Vazhithala</i>
                    </h3>
                    
                    <p>
                      Conducted one day seminar to the junior students about the computer <br />hardware, hands-on experience, specification and assemblying like cpu, ram,<br /> bios etc... 
                      <br />
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
         
        </Fade>
      </>
    );
  }
}

export default ExperienceAccordion;
