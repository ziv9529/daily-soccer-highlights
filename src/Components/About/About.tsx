import React from 'react'
import "./about.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
const profile = require("../../Assets/profile.jpg")


const About = () => {
    return (
        <div className='about-page'>
            <img id='p-img' src={profile} alt="no found" />
            <p>I'm 22 years old, from the center of Israel.</p>
            <p>I have a certification in Full Stack and Web Application Development at John Bryce Academy</p>
            <p> and i'm currently open to work!</p>
            <p>My knowledge is in: Javascript, React, NodeJS, MongoDB, MySQL, and Docker.</p>
            <p>I'm a self learner and everyday i like to learn somthing new</p>
            <p>I'm looking for a new challenges, with high motivation and passion for new technologies, science, and innovations.</p>

            <div className='links-section'>
                <IconButton href='https://www.linkedin.com/in/ziv-ashkenazi/' target={'_blank'}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton href='https://github.com/ziv9529' target={'_blank'} >
                    <GitHubIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default About