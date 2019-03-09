import React from "react";
import SocialIcon from "../components/social-icon";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";
import Me from "../images/me.png";
import ProfileImage from "../components/profile-image";

const Home = () => (
  <div>
    <ProfileImage src={Me}/>
    <h1>John Mahlon Peden</h1>
    <SocialIcon url="https://github.com/johnmahlon" src={ Github }/>
    <SocialIcon url="https://instagram.com/johnmahlon" src ={ Instagram }/>
  </div>
);

export default Home
