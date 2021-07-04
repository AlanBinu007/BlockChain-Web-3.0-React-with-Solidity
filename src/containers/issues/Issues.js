import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./Issues.css";
import "./blog.css";
import BlogsImg from "./BlogsImg";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import Button from "../../components/button/Button";

import prm from "../../images/prm.png";
import cloud from "../../images/cloud.png";
import react from "../../images/react.png";
import tech from "../../images/tech.png";
import datascience from "../../images/datascience.png";
import github from "../../images/github.png";
import spring from "../../images/spring.png";
import java from "../../images/java.png";
import ai from "../../images/ai.jpg";
import aws from "../../images/linkedin.png";
import vs from "../../images/vs.png";
import sp from "../../images/sp.png";

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
              My Blogs 
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
                href="https://alanbinu.hashnode.dev/"
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
            <a href="https://alanbinu.hashnode.dev/getting-started-with-competitive-programming-ckp7xf2qf0jldmds16f0e92qh" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={prm} alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                  28 May, 2021
                    </span>
                  </div>
                  <h3>Getting started with Competitive Programming</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 346 Views
                      <i class="lni-eye"></i> 50 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>

            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/what-should-i-learn-aws-or-gcp-or-azure-in-2021-ckny9v9yu0dfmews1h0sl9oez" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={cloud } alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    26 April, 2021
                    </span>
                  </div>
                  <h3>What Should I learn AWS or GCP or AZURE in 2021🤔❓</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 146 Views
                      <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/what-next-in-tech-industries" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={tech } alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    26 April, 2021
                    </span>
                  </div>
                  <h3>What next in tech industries🤔?</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 78 Views
                      <i class="lni-eye"></i> 46 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            
          </div>
        </div> <br/> <br/> <br/>
      </section>
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/data-science-should-i-need-to-learn-for-coming-years" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={datascience } alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    18 May, 2021
                    </span>
                  </div>
                  <h3>Data Science🔥 Should i need to learn for coming years?🤔</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 45 Views
                      <i class="lni-eye"></i> 22 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>

            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/how-to-use-github-developers-collaboration-using-github" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={github } alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    28 May, 2021
                    </span>
                  </div>
                  <h3>How To Use GitHub – Developers Collaboration Using GitHub</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 46 Views
                      <i class="lni-eye"></i> 35 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/spring-boot-do-i-need-to-study-in-2022-to-get-a-job" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={spring } alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    10 April, 2021
                    </span>
                  </div>
                  <h3>Spring Boot🔥 Do i need to study in 2022 to get a Job?🤔</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 234 Views
                      <i class="lni-eye"></i> 45 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            
          </div>
        </div> <br/> <br/> <br/>
      </section>
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/i-love-my-java" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={java } alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    10 April, 2021
                    </span>
                  </div>
                  <h3>I Love My Java💓</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 105 Views
                      <i class="lni-eye"></i> 19 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>

            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/how-to-get-started-with-artificial-intelligence" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={ai } alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    27 May, 2021
                    </span>
                  </div>
                  <h3>How to get started with Artificial Intelligence</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 56 Views
                      <i class="lni-eye"></i> 23 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/best-way-to-learn-react-from-scratch" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={react} alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    21 April, 2021
                    </span>
                  </div>
                  <h3>Best Way To Learn React From Scratch</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 125 Views
                      <i class="lni-eye"></i> 60 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            
          </div>
        </div> <br/> <br/> <br/>
      </section>
      <section id="blog" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/how-to-use-linkedin-to-get-a-job-1" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={aws} alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    28 May, 2021
                    </span>
                  </div>
                  <h3>How to Use LinkedIn to Get a Job</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 146 Views
                      <i class="lni-eye"></i> 60 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>

            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/best-extensions-for-vs-code-to-better-coding" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={vs} alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    25 April, 2021
                    </span>
                  </div>
                  <h3>Best extensions for vs code to better coding</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 109 Views
                      <i class="lni-eye"></i> 38 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-lg-4">
            <a href="https://alanbinu.hashnode.dev/angular-vs-reactjs-vs-vue-the-real-battle" target="_blank">
              <div class="blog-item-wrapper">
                <div class="blog-item-img">
                  
                    <img src={sp} alt="" />
                  
                </div>
                <div class="blog-item-text">
                  <div class="date">
                  <span>
                    21 April, 2021
                    </span>
                  </div>
                  <h3>Angular🏁 vs React.js🏁 vs Vue🏁 ⚔The Real Battle⚔</h3>
                  <div class="meta-tags">
                    <span>
                      <i class="lni-eye"></i> 125 Views
                      <i class="lni-eye"></i> 30 Likes
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
            
          </div>
        </div> <br/> 
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
