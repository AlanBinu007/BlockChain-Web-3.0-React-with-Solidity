import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";
import a from "../../images/a.png";

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Fade bottom duration={2000} distance="40px">
        <div class="container-fluid">
          <center>
            {" "}
            <h2>
              <b>My Blogs</b>
            </h2>
          </center>
          <br/><br/>

          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #1</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Detail
              </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #2</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Read More
              </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #3</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Detail
              </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #4</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Read More
              </a>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #1</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Detail
              </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #2</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Read More
              </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #3</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Detail
              </a>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div class="tm-content-box">
                <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #4</h4>
                <p class="tm-margin-b-20">
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra
              </p>
                <a href="#" class="tm-btn text-uppercase">
                  Read More
              </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      </div >
 
    );
  }
}

export default Issues;
