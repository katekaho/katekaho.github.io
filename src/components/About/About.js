import React from 'react';
import './About.css';
import PageHeader from '../PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import BottomNav from '../BottomNav/BottomNav';

function About(props) {
    return (
        <div className="text-container">
            <PageHeader 
                titleColor={props.titleColor}
                title="About me"
                subtitle="Work history and background"
                description="I completed a Bachelors degree in Computer Science from the University of California, Santa Cruz in 2019."
            />
            <div className="uni-list">
                <h3>During my time at university:</h3>
                <ul>
                    <li>I was in the <a href="https://tech4good.soe.ucsc.edu/#/">Tech4Good lab</a> for 2 years, where I studied web development, research, and design.</li>
                    <li>I did an internship at American Express working on a salesforce recruitment app.</li>
                    <li>I tutored for the <a href="https://courses.soe.ucsc.edu/courses/cmps5j">Intro to Programming in Java</a> and the <a href="https://courses.soe.ucsc.edu/courses/tim158">Business Strategy and Information Systems</a> classes.</li>
                    <li>I was the Outreach Chair for the <a href="https://swe.org/">Society of Women Engineers,</a> where I led a committee that organized engineering classes for local youth.</li>
                </ul>
            </div>
            <div className="linkedin">
                <h3><a href="https://www.linkedin.com/in/katekaho/">
                        Connect with me on LinkedIn</a></h3>
            </div>
            <div className="readings">
                <h3>Readings</h3>
                <p>Envisioning Information by Edward Tufte</p>
                <p>The Design of Everyday Things by Don Norman</p>
                <p>The Pocket Universal Principles of Design by William Lidwell</p>
            </div>
            <div className="hobbies">
                <p>Other hobbies include <Link to="/Art">painting</Link>, skateboarding, and hiking.</p>
            </div>
            <BottomNav currentPage="about"/>
        </div>
    )
}

export default About;