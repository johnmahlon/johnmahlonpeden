import React from "react";
import instagram from "../images/instagram.png";
import SocialIcon from "../components/social-icon";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";

const Home = () => (
  <div>
    <h1>John Mahlon Peden</h1>
    <SocialIcon url="https://github.com/johnmahlon" src={ Github } />
    <SocialIcon url="https://instagram.com/johnmahlon" src ={ Instagram } />
  </div>
);

export default Home
