import React from "react";
import classes from "./Landing.module.css";
import Image from "../Assets/abhijith.jpg";

const LandingPage = () => {
  return (
    <div className={classes.landing}>
      <div className={classes.landingrid}>
        <img className={classes.image} src={Image} alt="avatar" />
        <div className={classes.banner}>
          <h1>Abhijith Shetty</h1>
          <h4>Front End Web Developer</h4>
          <hr />
          <p>HTML | CSS | JavaScript | ReactJs | </p>
          <div className={classes.socialLinks}>
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/abhijith-shetty-64785b171/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/abhieee07/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
