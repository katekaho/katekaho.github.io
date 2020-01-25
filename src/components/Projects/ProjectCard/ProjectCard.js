import React from 'react';
import './ProjectCard.css';

const images = require.context('../../images', true);

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img height="110px" src={images(`./${props.imageName}.png`)}/>
            </div>
            <h3>{props.projectTitle}</h3>
        </div>
    )
}

export default ProjectCard;