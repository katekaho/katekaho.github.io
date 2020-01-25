import React from 'react';
import './ProjectCard.css';
import {Link, useRouteMatch} from 'react-router-dom';

const images = require.context('../../images', true);

export default function ProjectCard(props) {
    let match = useRouteMatch();
    return (
        <div className="project-card">
            <div className="project-card-img">
                <Link to={`${match.url}/${props.pageName}`}>
                    <img height="110px" src={images(`./${props.imageName}.png`)}/>
                </Link>
            </div>

            <h3><Link to={`${match.url}/${props.pageName}`}>{props.projectTitle}</Link></h3>
        </div>
    )
}