import React from 'react';
import ProjectText from '../../ProjectText/ProjectText';
import { Link } from 'react-router-dom';
import BottomNav from '../../../BottomNav/BottomNav';
import './ComponentCloner.css'

function ComponentCloner(props) {
    return (
        <div className="text-container">
            <ProjectText
                titleColor={props.titleColor}
                title="Component Cloner"
                subtitle="June 2019"
                description="I created a plugin for Figma to allow users to create rapid design iterations for components by recreating instances and assigning to a new master component."
                projectSummary="I came up with this idea when I was working with Figma (design tool like Sketch). When I found out about the Plugin Developers Beta, I joined and created this plugin."
                role="I came up with the structure and functionality of this application. After reading a few books on design, I came up with an approach for the UI. I drew my inital ideas for the UI on a notepad, then created a hi-fidelity mockup using Figma. Then read up the Figma Plugin API and created this application using pure HTML/CSS/TS."
            />
            <h4 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h4>
            <BottomNav/>
        </div>
    )
}

export default ComponentCloner;