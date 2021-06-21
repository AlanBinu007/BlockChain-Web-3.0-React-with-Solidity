import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";


export default function Blogs() {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">aaaa</h1>
        <p className="subTitle blog-subtitle">aaa</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          
              <BlogCard
                blog={{
                  url: "a",
                  image: "a",
                  title: "a",
                  description: "a",
                }}
              />
              <BlogCard
                blog={{
                  url: "a",
                  image: "a",
                  title: "a",
                  description: "a",
                }}
              />
            
        </div>
      </div>
    </div>
  );
}
