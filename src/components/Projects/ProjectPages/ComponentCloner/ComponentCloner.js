import React from 'react';
import ProjectText from '../../ProjectText/ProjectText';
import { Link } from 'react-router-dom';
import BottomNav from '../../../BottomNav/BottomNav';
import './ComponentCloner.css'
import CCUserFlow from '../../../images/CCUserFlow.png';

function ComponentCloner(props) {
    return (
        <div className="text-container">
            <ProjectText
                titleColor={props.titleColor}
                title="Component Cloner"
                subtitle="June 2019"
                description="I created a plugin for Figma to allow users to create rapid design iterations for components by recreating instances and assigning to a new master component."
                projectSummary="I came up with this idea when I was working with Figma (design tool like Sketch). When I found out about the Plugin Developers Beta, I joined and created this plugin."
                role="After reading about design, I drew my inital ideas for the UI on a notepad, then created a hi-fidelity mockup using Figma. Then I read up the Figma Plugin API and created this application using HTML/CSS/TypeScript."
            />
            <h2 className="cc-link"><a href="https://www.figma.com/c/plugin/736564662640346811/Component-Cloner">View the project page</a></h2>
            <h2 className="user-flow-label">User flow diagram</h2>
            <img className="cc-user-flow" src={CCUserFlow} alt="component cloner user flow diagram"/>
            <h4 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h4>
            <BottomNav/>
        </div>
    )
}

export default ComponentCloner;