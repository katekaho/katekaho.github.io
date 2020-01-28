import React from 'react';
import PageHeader from '../../PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import './ProjectText.css'

function ProjectText(props) {

    return(
        <div className="project-text">
            <h3 className="project-path">
                <Link to="/projects">Projects</Link>
                <span>{" > "+props.title}</span>
            </h3>
            <PageHeader 
                titleColor={props.titleColor}
                title={props.title}
                subtitle={props.subtitle}
                description={props.description}
            />
            <h3 className="project-summary">{props.projectSummary}</h3>
            <h2 className="project-role">My role</h2>
            <p className="role-info">{props.role}</p>
            {props.tasks && props.tasks.length > 0 &&
                <div className="tasks">
                    <h2>Key responsibilities</h2>
                    <ul>
                        {props.tasks.map(task => {
                            return <li>{task}</li>
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}

export default ProjectText;