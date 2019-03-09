import React from "react"
import socialMediaIconStyles from "./social-icon.module.css"

export default (props) => (
    <div className={socialMediaIconStyles.socialMediaIcon}>
        <a href={props.url}>
            <img src={props.src} alt=""/>
        </a>
    </div>
)