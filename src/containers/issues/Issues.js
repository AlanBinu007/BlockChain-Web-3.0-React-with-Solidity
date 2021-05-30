import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./Issues.css";

import a from "../../images/img1.jpg";
import ai from "../../images/img1.jpg";
import java from "../../images/img1.jpg";

  const toggle = () => {
  return (
    <Fade bottom duration={2000} distance="20px">
    <div class="row">
      <div class="post-masonry col-md-4 col-sm-6">
        <div class="blog-thumb">
          <a href="blog-single.html"> <img src={a} alt="" /></a>
        </div>
        <div class="blog-body">
          <div class="box-content">
            <h3 class="post-title">
              Keep Your Stuff Alive
            </h3>
            <span class="blog-meta">10 November 2084 by Tawana</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              deleniti, id quibusdam aut optio saepe soluta tempore neque
              voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div class="post-masonry col-md-4 col-sm-6">
        <div class="blog-thumb">
          <a href="blog-single.html"> <img src={a} alt="" /></a>
        </div>
        <div class="blog-body">
          <div class="box-content">
            <h3 class="post-title">
              Keep Your Stuff Alive
            </h3>
            <span class="blog-meta">10 November 2084 by Tawana</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              deleniti, id quibusdam aut optio saepe soluta tempore neque
              voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div class="post-masonry col-md-4 col-sm-6">
        <div class="blog-thumb">
          <a href="blog-single.html"> <img src={a} alt="" /></a>
        </div>
        <div class="blog-body">
          <div class="box-content">
            <h3 class="post-title">
              Keep Your Stuff Alive
            </h3>
            <span class="blog-meta">10 November 2084 by Tawana</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              deleniti, id quibusdam aut optio saepe soluta tempore neque
              voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div class="post-masonry col-md-4 col-sm-6">
        <div class="blog-thumb">
          <a href="blog-single.html"> <img src={ai} alt="" /></a>
        </div>
        <div class="blog-body">
          <div class="box-content">
            <h3 class="post-title">
              Keep Your Stuff Alive
            </h3>
            <span class="blog-meta">10 November 2084 by Tawana</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              deleniti, id quibusdam aut optio saepe soluta tempore neque
              voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div class="post-masonry col-md-4 col-sm-6">
        <div class="blog-thumb">
          <a href="blog-single.html"> <img src={java} alt="" /></a>
        </div>
        <div class="blog-body">
          <div class="box-content">
            <h3 class="post-title">
              Keep Your Stuff Alive
            </h3>
            <span class="blog-meta">10 November 2084 by Tawana</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              deleniti, id quibusdam aut optio saepe soluta tempore neque
              voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div class="post-masonry col-md-4 col-sm-6">
        <div class="blog-thumb">
          <a href="blog-single.html"> <img src={a} alt="" /></a>
        </div>
        <div class="blog-body">
          <div class="box-content">
            <h3 class="post-title">
              Keep Your Stuff Alive
            </h3>
            <span class="blog-meta">10 November 2084 by Tawana</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              deleniti, id quibusdam aut optio saepe soluta tempore neque
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default toggle;
