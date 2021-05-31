import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./Issues.css";
import BlogsImg from "./BlogsImg";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import Button from "../../components/button/Button";

import a from "../../images/img1.jpg";
import ai from "../../images/img1.jpg";
import java from "../../images/img1.jpg";
const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

const toggle = (props) => {
  const theme = props.theme;
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  return (
    <>
    <Fade bottom duration={2000} distance="20px">
      
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
              {blogSection["subtitle"]}
            </p>
            <div className="address-btn-div">
              <Button
                text="Show some 💖 to my Blog"
                newTab={true}
                href="https://hashnode.com/@alanbinu"
                theme={theme}
              />
            </div>
          </div>
        </div>
     

      <br />
      <br />
      <div class="row">
        <center>
          <h2 style={{ color: theme.text }}>My Trending Blogs</h2>
        </center>
        <br />
        <div class="post-masonry col-md-6 col-sm-6">
          <div class="blog-thumb">
            <a href="blog-single.html">
              {" "}
              <img src={a} alt="" />
            </a>
          </div>
          <div class="blog-body">
            <div class="box-content">
              <h3 class="post-title">Keep Your Stuff Alive</h3>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                deleniti, id quibusdam aut optio saepe soluta tempore neque
                voluptatum.
              </p>
            </div>
          </div>
        </div>
        <div class="post-masonry col-md-6">
          <div class="blog-thumb">
            <a href="blog-single.html">
              {" "}
              <img src={a} alt="" />
            </a>
          </div>
          <div class="blog-body">
            <div class="box-content">
              <h3 class="post-title">Keep Your Stuff Alive</h3>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                deleniti, id quibusdam aut optio saepe soluta tempore neque
                voluptatum.
              </p>
            </div>
          </div>
        </div><div class="post-masonry col-md-6 col-sm-6">
          <div class="blog-thumb">
            <a href="blog-single.html">
              {" "}
              <img src={a} alt="" />
            </a>
          </div>
          <div class="blog-body">
            <div class="box-content">
              <h3 class="post-title">Keep Your Stuff Alive</h3>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                deleniti, id quibusdam aut optio saepe soluta tempore neque
                voluptatum.
              </p>
            </div>
          </div>
        </div><div class="post-masonry col-md-6 col-sm-6">
          <div class="blog-thumb">
            <a href="blog-single.html">
              {" "}
              <img src={a} alt="" />
            </a>
          </div>
          <div class="blog-body">
            <div class="box-content">
              <h3 class="post-title">Keep Your Stuff Alive</h3>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                deleniti, id quibusdam aut optio saepe soluta tempore neque
                voluptatum.
              </p>
              
            </div>
          </div>
        </div>
        
      </div><br/><br/>
    </Fade>
    </>
  );
};

export default toggle;
