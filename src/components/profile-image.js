import React from "react";
import profileStyles from "./profile-image.module.css";

const ProfileImage = (props) => (
    <div className={profileStyles.image}>
        <img src={props.src} alt="Photo of me"/>
    </div>
);

export default ProfileImage;