import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import SocialImg from "./SocialImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import ContactForm from './contactform';

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      
        <Header theme={theme} />
        <div className="contact-heading-div">
          
          <Fade bottom duration={1000} distance="40px">
          
            
              <div className="contact-heading-img-div">
              <div className="contact-heading-img-div">
                
                <SocialImg theme={theme} />
              </div>
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  "If people like you they will listen to you, but if they trust you they'll do business with you."
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                <a href="https://drive.google.com/uc?export=download&id=1E8zVAoWa73sy7ZXSUKLYWqX31pmUj-PH" download>
                  <button
                  className="button1"
                >
                  Download My Resume
                </button>  
                  </a>
                  
                </div>
                <div className="address-btn-div">
                  <Button
                    text="Give me a ⭐ to my GitHub Repo"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
           </Fade> </div>
          
          <br />
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
            <div className="address-heading-text-div">
                <ContactForm />
                
              </div>
              <div className="contact-heading-img-div">
                
                <AddressImg theme={theme} />
              </div>
              
            </div>
          </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      
      </>
    );
  }
}

export default Contact;
