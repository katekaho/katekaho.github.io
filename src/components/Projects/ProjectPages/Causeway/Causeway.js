import React from 'react';
import ProjectText from '../../ProjectText/ProjectText';
import { Link } from 'react-router-dom';
import BottomNav from '../../../BottomNav/BottomNav';
import './Causeway.css';
import causewayHome1 from '../../../images/CausewayHome1.png';
import causewayHome2 from '../../../images/CausewayHome2.png';

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
            <h2><a href="https://causeway.soe.ucsc.edu/#/">View the site here</a></h2>
            <h2 className="screenshots">Screenshots</h2>
            <div className="screenshot-container">
                <img className="screenshot-item" alt="Causeway homepage top" height="250px" src={causewayHome1}/>
                <img className="screenshot-item" alt="Causeway homepage bottom" height="250px" src={causewayHome2}/>
            </div>
            
            <h4 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h4>
            <BottomNav/>
        </div>
    )
}

export default Causeway;