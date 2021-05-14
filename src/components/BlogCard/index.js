import react, { useState } from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blogContainer">
      <div className="blogHeading"></div>
      <div className="blogBody">
        <div className="blogData">
          <div className="blogCard">
            <div className="cardImage">
              <img
                className="blogImg"
                src="https://res.cloudinary.com/deveshcloudinary/image/upload/v1620995416/deveshkordeblogs/960x0_thbjqe.jpg"
                alt="code"
                height="100%"
                width="100%"
                style={{
                  objectFit: "cover",
                  borderRadius: "20px 20px 0px 0px",
                }}
              />
            </div>
            <div className="cardAssets">
              <div className="cardCategory">Technology</div>
              <div className="cardReadingTime">5 mins read</div>
            </div>
            <div className="cardHeading">Why I Love React?</div>
            <div className="cardDescription">
              React is the library introduced by Facebook, which works in
              Javascript.React is the library introduced by Facebook, which
              works in Javascript
            </div>
            <div className="cardButton">
              <Link
                to="/blogs"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="readButton">Read</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="googleAds"></div>
    </div>
  );
};

export default BlogCard;
