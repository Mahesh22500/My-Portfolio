import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Mahesh Singh</h2>
        <div className="prompt">
          <p>A college student with a passion for learning and creating.</p>

          <a
            href="https://www.linkedin.com/in/mahesh-singh-8ab106221/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>

          <a
            href=""
            target="_blank"
          >
             <EmailIcon />
          </a>

         

          <a href="https://github.com/Mahesh22500" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux ToolKit, HTML, CSS, TailwindCSS
             
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, SpringBoot, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C++, Kotlin</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
