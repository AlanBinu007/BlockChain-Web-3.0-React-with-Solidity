import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./Issues.css";
import "./blog.css";
import BlogsImg from "./BlogsImg";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import Button from "../../components/button/Button";

import img from "../../images/img1.jpg";
import prm from "../../images/prm.png";
import cloud from "../../images/cloud.png";
import react from "../../images/react.png";
import tech from "../../images/tech.png";
import datascience from "../../images/datascience.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import spring from "../../images/spring.png";
import java from "../../images/java.png";
import ai from "../../images/ai.jpg";

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
            <h2 className="blog-heading-text">
              My Blogs and Open Source Contributions
            </h2>
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
      </Fade>
      <br />
      <br />
      <center>
        <h2 style={{ color: theme.text }}>My Latest Blogs</h2>
      </center>
      <br />
      <br />
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
            <a href="single-post.html">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={linkedin} alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    10 April, 2018
                    </span>
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 346 Views
                      <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>

            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div> <br/> <br/> <br/>
      </section>
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3 class="white">10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <br/> <br/> <br/><br/> <br/>  
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section><br/> <br/> <br/><br/> <br/>  
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <br/> <br/> <br/><br/> <br/>  
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <div class="date">
                    <i class="lni-calendar"></i>10 April, 2018
                  </div>
                  <h3>10 Tips to Design a High-converting Landing Page</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 4.5k Views  <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <br />
      <br />
      <center>
        <div className="address-btn-div">
          <Button
            text="View More Blogs"
            newTab={true}
            href="https://hashnode.com/@alanbinu"
            theme={theme}
          />
        </div>
      </center>
      <br />
    </>
  );
};

export default toggle;
