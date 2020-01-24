import React from 'react';
import './About.css';
import PageHeader from '../PageHeader/PageHeader';

function About(props) {
    return (
        <div className="text-container">
            <PageHeader 
                titleColor={props.titleColor}
                title="About me"
                subtitle="Work history and background"
                description="I completed a Bachelors degree in Computer Science from the University of California, Santa Cruz in 2019."
            />
        </div>
    )
}

export default About;