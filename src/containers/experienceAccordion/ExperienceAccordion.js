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
                    ReactJs and SpringBoot
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
                    <i>Full Time</i><br /><br />
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
                      <i>Indel Systems</i>
                    </h3>
                    <i>April 2020 - July 2020</i>
                    <br />
                    <i>Full Time</i>
                  </div>

                  <div class="timeline-content">
                    
                    <h3>
                      <i>Full Stack Web Developer</i>
                      
                    </h3>
                    
                    <p>Indel System is a small software based company founded in 1992.<br />This is a private company consist of 14 employees</p>
                    <p>
                      I worked as a Web Developer in Indel Systems<br/>
                      The main technologies that i used over ther are Springboot, Spring, RESTful API, Microservices,JSP, HTML, CSS, JQuery, <br />PHP etc..
                    </p>
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
                    
                    <p>Santhisoft is a software product development company in Kerala, India <br />incorporated in 2005 and is managed by CMI congregation.</p>
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
                      <i class="i1"><b>Web Tech Solutions</b></i>
                    </h3>
                    <i>June 2017 - Feb 2020</i>
                    <br />
                    <i class="i1"><b>CEO & Founder</b></i>
                  </div>

                  <div class="timeline-content">
                   
                    <h3>
                      <i class="i1"><b>Software and Web Developer</b></i>
                      
                    </h3>
                    
                   

                    <p>
                      Works as a freeLancer specialized in Web and Software Development<br />
                      Mainly deals with creating, hosting and
                       maintaining the websites and <br />utility softwares with online database access.<br />
                       We are also bulding Desktop Computer as per client requirement as well.
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
                      <i>Participants</i>
                    </h3>
                    <i>June 2021</i>
                    <br />
                    
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <i>Google Developer Student Clubs</i>
                    </h3>
                    Successfully Participated in Google Developer Student Clubs 
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
                      <i>Code Contributor</i>
                    </h3>
                    <i>May 2021</i>
                    <br />
                    
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <i>Leet Code</i>
                    </h3>
                    Contribute codes for some problems
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
                      <i>HR Assistant for <br/>Off Campus Drive</i>
                    </h3>
                    <i>April 2021</i>
                    <br />
                    
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <i>Infosys, Pune</i>
                    </h3>
                    Support the HR for Conducteting the Campus Drive<br /> I worked as an assistant for following up each and every candidate
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
                      <i>GitHub Contributor</i>
                    </h3>
                    <i>July 2019</i>
                    <br />
                    
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <i>private IT Clubs </i>
                    </h3>
                    Contributed codes for Various organization and also support for solving some<br/> of my colleagues code issues
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
