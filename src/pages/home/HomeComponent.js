import React, { Component } from "react";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import FeelingProud from "./FeelingProud";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Greeting from "../../containers/greeting/Greeting"

class Home extends Component {
  render() {
    console.log(this.props.theme);
    const theme = this.props.theme;

    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              
              <div className="heading-text-div">
              <Greeting theme={theme} />
              </div>
              <div className="heading-img-div">
                <FeelingProud theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <Skills theme={this.props.theme}/>

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
