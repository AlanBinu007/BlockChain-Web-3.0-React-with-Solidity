import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import a from "../../images/aws.png";
import b from "../../images/deeplearning_ai_logo.png";
import google from "../../images/google_logo.png";
import ibm from "../../images/ibm_logo.png";
import googlecloud from "../../images/google_cloud.png";
import c from "../../images/colorado.png";
import m from "../../images/Michigan.png";
import sas from "../../images/sas.png";
import j from "../../images/johns.png";
class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <>
        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style="backgroundColor: #F6B808"
                >
                  <img
                    className="logo_img"
                    src={b}
                    alt={certificate.alt_name}
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Click To View
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                {certificate.title}
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {certificate.subtitle}
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/specialization/YEBRSA3E3VNZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={a} alt="AWS Fundamentals" />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Verify
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                AWS Fundamentals
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                AWS
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/professional-cert/U3SMLX6RNRH7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={google}
                    alt={certificate.alt_name}
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Verify
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Google IT Support
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                "Google",
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/professional-cert/YG2GJU3CR3VV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={googlecloud}
                    alt="googlecloud"
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Verify
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Cloud Engineering with Google Cloud
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Google Cloud
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/professional-cert/2JZ5EPXUJDKB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={ibm} alt="ibm" />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Verify
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                IBM AI Engineering
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                IBM
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/professional-cert/PXHVZTPFZP6G"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={googlecloud}
                    alt="Google Cloud"
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Verify
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Google IT Automation with Python
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Google Cloud
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/specialization/SV7Y94BUPANX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={c} alt="AWS Fundamentals" />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Verify
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Cybersecurity for Business
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                University Of Colorado
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/specialization/DRQYXWUDENRD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={m} alt="AWS Fundamentals" />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Verify
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Applied Data Science with Python
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                University Of Michigan
              </h3>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/professionalcert/W2GQ6Y63APGX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={ibm} alt="AWS Fundamentals" />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Click to view
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                IBM Applied AI
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                IBM
              </h3>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/professional-cert/VPSY4RU6MP6T"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={sas} alt="sas" />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    click to view
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                SAS Visual Business Analytics
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                SAS
              </h3>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/professionalcert/7ALWY3F2QLQ4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={ibm} alt="AWS Fundamentals" />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    click to view
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                IBM Data Analyst
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                IBM
              </h3>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/specialization/ZU7B8S7WZT8U"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={googlecloud}
                    alt="AWS Fundamentals"
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Click to view
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Advanced Machine Learning with TensorFlow on Google Cloud
                Platform
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Google Cloud
              </h3>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={google}
                    alt="google"
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Click to view
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                Google Digital Unlocked
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Google 
              </h3>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/specialization/LPY9C8LPVSKK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={m}
                    alt="AWS Fundamentals"
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Click to view
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
              Python for Everybody
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                University Of Michigan
              </h3>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="20px">
          <div className="cert-card">
            <div className="content">
              <a
                href="https://coursera.org/verify/specialization/XTB3R4FPRBNX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  //style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={j}
                    alt="AWS Fundamentals"
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Click to view
                  </h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
              Data Science
              </h2>
              <h3
                className="cert-body-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Johns Hopkins University
              </h3>
            </div>
            
          </div>
          <center>
            <a href="https://drive.google.com/folderview?id=1H-tOOipJ0lx7B1FE3tJh7zRcEOO4IhJE" target="_blank">
          <button className="button">View More</button></a>
          </center>
        
        </Fade>
        
        
      </>
    );
  }
}

export default CertificationCard;
