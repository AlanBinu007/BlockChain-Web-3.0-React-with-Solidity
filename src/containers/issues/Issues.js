import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import BlogsImg from "./BlogsImg";
import a from "../../images/a.png";
import b from "../../images/b.png";
import { greeting, contactPageData } from "../../portfolio.js";

import { Carousel } from 'react-bootstrap';


const blogSection = contactPageData.blogSection;

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <div>
          <br /><br />
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  "Blogging is not rocket science. It’s about being yourself and putting what you have into it.”
                </p>
                <div className="resume-btn-div">
                  <a href="https://hashnode.com/@alanbinu" target="_blank">
                    <button
                      className="button1"
                    >
                      My Blog Page  
                </button>
                  </a>
                </div>
              </div>

            </div>
            <br />

            <br /><br />
            <center><h2><b>My Blogs</b></h2></center><br /><br />
            <Carousel fade={true} pause={false}>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={a}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={a}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={a}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>



            <div class="container-fluid" >


              <br /><br /><br /><br />
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div class="tm-content-box">
                    <img src={a} alt="Image" class="tm-margin-b-20 img-fluid" />
                    <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #1</h4>
                    <p class="tm-margin-b-20">
                      Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                      Donec scelerisque porttitor pharetra
              </p>

                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
                    </a>

                  </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div class="tm-content-box">
                    <img src={b} alt="Image" class="tm-margin-b-20 img-fluid" />
                    <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #2</h4>
                    <p class="tm-margin-b-20">
                      Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                      Donec scelerisque porttitor pharetra
              </p>
                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
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
                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
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
                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
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
                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
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
                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
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
                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
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
                    <a href="https://hashnode.com/@alanbinu" target="_blank">
                      <button
                        className="tm-btn text-uppercase"
                      >
                        My Blog Page
                </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
            <center> <div className="resume-btn-div">
              <a href="https://hashnode.com/@alanbinu" target="_blank">
                <button
                  className="button1"
                >
                  View More Blog
                </button>
              </a>
            </div></center>
          </Fade>
        </div>
      </div >

    );
  }
}

export default Issues;
