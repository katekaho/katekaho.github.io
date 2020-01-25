import React from 'react';
import PageHeader from '../../PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import './ProjectText.css'

function ProjectText(props) {

    return(
        <div className="project-text">
            <h4 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h4>
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