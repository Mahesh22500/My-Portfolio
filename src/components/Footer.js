import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TerminalIcon from '@mui/icons-material/Terminal';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer" >
      <div className="socialMedia">
       

        <a href="https://www.linkedin.com/in/mahesh-singh-8ab106221/"><LinkedInIcon /></a>
        <a href="https://www.linkedin.com/in/mahesh-singh-8ab106221/"><TerminalIcon /></a>
  
      </div>
      <p> &copy; mahesh11.com</p>
    </div>
  );
}

export default Footer;
