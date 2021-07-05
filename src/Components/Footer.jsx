import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className="foot">
            <div className="social">
                <a href="https://github.com/anomic30">
                    <GitHubIcon style={{ color: "#d5d7e0" }} />
                </a>
                <a href="https://www.linkedin.com/in/anomic/">
                    <LinkedInIcon style={{ color: "#d5d7e0" }} />
                </a>
            </div>
        </div>
    )
}

export default Footer;
