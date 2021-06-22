import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import Button from "../../components/button/Button";


class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header">
              My Valuable Professional Certificates
            </h1>
          </Fade>
          <br/>
        </div>
        <div className="certs-body-div">
          
         <CertificationCard />
         

         
        </div><center><Button class="button1"
              text="View More"
              newTab={true}
              href="https://drive.google.com/drive/u/0/folders/1H-tOOipJ0lx7B1FE3tJh7zRcEOO4IhJE"
              theme=""
            /></center>
      </div>
    );
  }
}

export default Certifications;
