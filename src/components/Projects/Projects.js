import React from 'react';
import './Projects.css';
import PageHeader from '../PageHeader/PageHeader';
import BottomNav from '../BottomNav/BottomNav';
import ProjectCard from './ProjectCard/ProjectCard';

const projects = [
    {
        'projectTitle': 'Express Hire',
        'imageName': 'ExpressHire',
        'pageName': 'express-hire'
    },
    {
        'projectTitle': 'Component Cloner',
        'imageName': 'ComponentCloner',
        'pageName': 'component-cloner'
    },
    {
        'projectTitle': 'Project GUPPI',
        'imageName': 'Guppi',
        'pageName': 'project-guppi'
    },
    {
        'projectTitle': 'Causeway Homepage',
        'imageName': 'Causeway',
        'pageName': 'causeway'
    },
    {
        'projectTitle': 'Cryptanna',
        'imageName': 'Cryptanna',
        'pageName': 'cryptanna'
    },
]

function Projects(props) {
    return (
        <div className="text-container">
            <PageHeader 
                titleColor={props.titleColor}
                title="Projects"
                subtitle="Development and design work"
                description="I’ve had the opportunity to work on some cool projects. Here are a few examples. "
            />

            <div className="check-github">
                <h3><a href="https://github.com/katekaho">Check out my Github for more.</a></h3>
            </div>
            

            <div className="project-cards">
                {
                    projects.map(project => {
                        return <ProjectCard 
                                projectTitle={project.projectTitle} 
                                imageName={project.imageName}
                                pageName={project.pageName}/>
                    })
                }
            </div>

            <BottomNav currentPage="projects"/>
        </div>
    )
}

export default Projects;