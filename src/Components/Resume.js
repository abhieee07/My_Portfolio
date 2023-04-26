import React from "react";
import { Grid, Cell } from "react-mdl";
import classes from "./Resume.module.css";
import Image from "../Assets/abhijith.jpg";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Doc from "../Assets/ABHIJITH_RESUME.pdf";

const Resume = () => {
  return (
    <div>
      <Grid className={classes.resumeGrid}>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img src={Image} alt="avatar" />
          </div>
          <h2 style={{ paddingTop: "2em" }}>Abhijith Shetty</h2>
          <h4 style={{ color: "grey" }}>Front End Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "60%" }} />
          <p>
            Having a total of 4+ years of experience in IT .Advanced knowlede of
            Html/css,Javascript,React js,React native,Redux.Intrested to work on
            a challenging job profile which provides an opportunity to enhance
            my technical skills and knowledge{" "}
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "60%" }} />
          <h5>Address</h5>
          <p>
            (2,99) (7,1) Nidhi kenja road Katipalla kaikamba,Mangalore-575030
          </p>
          <h5>Phone Number </h5>
          <p>9449085956</p>
          <h5> Phone Number (secondary) </h5>
          <p>8310191763</p>
          <h5>Email</h5>
          <p>abhijithshetty1996@gmail.com</p>
          <h5>Date Of Birth</h5>
          <p> 7'th April 1996</p>
          <hr
            style={{
              borderTop: "3px solid #833fb2",
              width: "60%",
              marginBottom: "30px",
            }}
          />
          <a
            className={classes.download}
            href={Doc}
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </Cell>
        <Cell className={classes.resumeRightCol} col={8}>
          <h2>Education</h2>
          <Education
            startYear={2000}
            endYear={2012}
            SchoolName="Delhi Public School"
          />
          <Education
            startYear={2012}
            endYear={2014}
            SchoolName="Sharada-Pre-University"
          />
          <Education
            startYear={2014}
            endYear={2018}
            SchoolName="Srinivas Institute of Technology"
            SchollDescription="Bachelor's degree in Electronics and communication Engineering"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Experience</h2>
          <Experience
            startYear="January 2019"
            endYear="May 2020"
            jobName="Solulab Inc"
            title="Quality Analyst"
            jobDescription=" Establishing and enforcing QA practices for software development
                         and release processes.Analyzing performance tests results and presenting test reports to project 
                         stakeholders.Create and execute manual test cases/scenarios, performs tests including functional, 
                         integration, and regression performance.Design, build, develop and execute manual/automated test scripts"
          />
          <Experience
            startYear="July 2020"
            endYear="Current"
            jobName="Niveus Solutions"
            title="Front End Developer"
            jobDescription="Worked on multiple banking
            application using react js, react
             native. Collaborated with product
            team members to implement new
             feature developments. Optimized
              components for maximum
            performance across a vast array of
             web-capable devices and browsers.
             Tech Stack: React.js,react native,
             JavaScript , HTML ,CSS ,REST API
            ,context api."
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skills skill="HTML" progress={98} />
          <Skills skill="Css" progress={99} />
          <Skills skill="Javascript" progress={95} />
          <Skills skill="React jS" progress={95} />
          <Skills skill="Redux" progress={93} />
          <Skills skill="React Formik" progress={90} />
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
