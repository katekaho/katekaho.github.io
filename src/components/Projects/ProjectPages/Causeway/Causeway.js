import React from 'react';
import ProjectText from '../../ProjectText/ProjectText';
import { Link } from 'react-router-dom';
import BottomNav from '../../../BottomNav/BottomNav';
import './Causeway.css';

function Causeway(props) {
    return (
        <div className="text-container">
            <ProjectText
                titleColor={props.titleColor}
                title="Causeway Homepage"
                subtitle="September 2018"
                description="The Tech4Good Lab wanted a homepage designed for Causeway, a site used for research in HCI."
                projectSummary="I worked in a team of 3 students at Tech4Good lab in the design team to create a hi-fidelity mock-up for the homepage for Causeway."
                role="I created the updated design of the logo for Causeway to be more of a flat art design and created the nav bar. I bounced off ideas for the homepage with the other designers. We took turns piloting on the design and directing each other."
            />
            <h4 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h4>
            <BottomNav/>
        </div>
    )
}

export default Causeway;