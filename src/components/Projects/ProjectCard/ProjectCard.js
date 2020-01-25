import React from 'react';
import './ProjectCard.css';
import {Link, useRouteMatch} from 'react-router-dom';

const images = require.context('../../images', true);

function ProjectCard(props) {
    let match = useRouteMatch();
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img height="110px" src={images(`./${props.imageName}.png`)}/>
            </div>
            <h3><Link to={`${match.url}/${props.pageName}`}>{props.projectTitle}</Link></h3>
        </div>
    )
}

export default ProjectCard;