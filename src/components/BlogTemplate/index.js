import React from "react";
import "./BlogTemplate.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const BlogTemplate = () => {
  return (
    <div className="templateContainer">
      <div className="tempHeader">Why I love react ?</div>
      <div className="tempData">
        <div className="socialmedia">
          <div className="mediaWrapper">
            <FaFacebookF className="smIcons" />
            <FaLinkedinIn className="smIcons" />
            <FaInstagram className="smIcons" />
            <AiOutlineTwitter className="smIcons" />
          </div>
        </div>
        <div className="tempBlog">
          <div className="dataWrapper">
            <h2 className="blogHeading" style={{ fontSize: "1.7rem" }}>
              H1
            </h2>
            <p className="blogDescription" style={{ fontSize: "1.2rem" }}>
              p1
            </p>
            <div className="blogImage">
              <img
                className="blogImg"
                src=""
                alt="code"
                height="100%"
                width="100%"
                style={{
                  objectFit: "contain",
                  borderRadius: "20px 20px 0px 0px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
