import React from 'react';
import ProjectText from '../../ProjectText/ProjectText';
import { Link } from 'react-router-dom';
import './ProjectGuppi.css';
import GuppiPresentation from '../../../images/GuppiPresentation.jpg';
import GuppiPoster from '../../../images/GuppiPoster.jpg';


const tasks = [
    "Create Jupyter Notebook extension by reading API documentation and looking at examples of other extensions",
    "Integrate Google Cloud Platform to manage instances",
    "Add functionality to SSH into instances to run commands across clusters of instances across different cloud services",
    "Meet with CISCO Security business group sponsors weekly to update on progress and recieve feedback"
]

function ProjectGuppi(props) {
    return (
        <div className="text-container">
            <ProjectText
                titleColor={props.titleColor}
                title="Cisco Project GUPPI"
                subtitle="January 2019"
                description="Cisco wanted dev ops tools for data scientists all in one place inside Jupyter Notebook. A Grand Unified Platform for Process Interaction."
                projectSummary="I worked in a team of 3 students at UC Santa Cruz to create an extension for Jupyter Notebook as our Senior Design Project."
                role="I integrated Google Cloud API to allow users to create, start, stop, and restart their cloud instances. I created an abstract class for Cloud Services so users could easily switch between using Amazon Web Services or the Google Cloud Platform. I also incorperated Github API to allow users to view past commits on the project they were working on."
                tasks={tasks}
            />
            <h2><a href="https://github.com/katekaho/project-guppi">View the project page</a></h2>
            <h2 className="sponsors-day">Winner of best presentation at Baskin School of Engineering Partner's Day 2019</h2>
            <div className="screenshots">
                <img className="sponsor-day" src={GuppiPresentation} alt="Project Guppi team presenting at baskin partners day"/>
                <img className="sponsor-day" src={GuppiPoster} alt="Project Guppi team in front of project poster"/>
            </div>
            <h3 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h3>
        </div>
    )
}

export default ProjectGuppi;