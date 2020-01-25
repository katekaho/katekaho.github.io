import React from 'react';
import './Projects.css';
import PageHeader from '../PageHeader/PageHeader';
import BottomNav from '../BottomNav/BottomNav';

function Projects(props) {
    return (
        <div className="text-container">
            <PageHeader 
                titleColor={props.titleColor}
                title="Projects"
                subtitle="Development and design work"
                description="I’ve had the opportunity to work on some cool projects. Here are a few examples. "
            />
            <BottomNav currentPage="projects"/>
        </div>
    )
}

export default Projects;