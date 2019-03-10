import React from "react";
import socialMediaIconStyles from "./social-icon.module.css";

export default (props) => (
    <div className={socialMediaIconStyles.socialMediaIcon}>
        <a rel="noopener noreferrer" target="_blank" href={props.url}><img src={props.src} alt=""/></a>
    </div>
);