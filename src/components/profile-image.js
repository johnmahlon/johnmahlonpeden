import React from "react";
import profileStyles from "./profile-image.module.css";

const ProfileImage = (props) => (
    <div className={profileStyles.image}>
        <img src={props.src}/>
    </div>
);

export default ProfileImage;