import React from "react";
import "./blog.css";
import Img1 from "../../assets/background1.jpg";
import Img2 from "../../assets/background2.jpg";
import Img3 from "../../assets/background3.jpg";

const Blog = () => {
  return (
    <div id="blog">
      <div className="blog-container">
        <h1>Blog</h1>
      </div>
      <div className="blog-me">
        <div className="blog-image">
          <img src={Img1} alt="Blog Image" />
          <h3 className="blog-header">GYM Body Builder.</h3>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tenetur tempora, dolorem nemo sit quam pariatur dolor vitae, commodi
            nulla, placeat saepe deleniti possimus sint delectus? Error eligendi
            eum sed.
          </p>
        </div>
        <div className="blog-image">
          <img src={Img2} alt="Blog Image" />
          <h3 className="blog-header">Fitness Body Mind</h3>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tenetur tempora, dolorem nemo sit quam pariatur dolor vitae, commodi
            nulla, placeat saepe deleniti possimus sint delectus? Error eligendi
            eum sed.
          </p>
        </div>
        <div className="blog-image">
          <img src={Img3} alt="Blog Image" />
          <h3 className="blog-header">Chest Body Fitness</h3>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tenetur tempora, dolorem nemo sit quam pariatur dolor vitae, commodi
            nulla, placeat saepe deleniti possimus sint delectus? Error eligendi
            eum sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
