import React from 'react';
import ProjectText from '../../ProjectText/ProjectText';
import { Link } from 'react-router-dom';


const tasks = [
    "Learn Salesforce technologies that allow developers to modify its existing functionality (Apex, Lightning Component Framework, testing)",
    "Identify any flaws in the application and come up with improvements and solutions",
    "Define the direction of the application to ensure project completion",
    "Create slides for presentations which clearly convey the problem and the approach towards the solution",
    "Attend daily SCRUM meetings and update tasks"
]

function ExpressHire(props) {
    return (
        <div className="text-container">
            <ProjectText
                titleColor={props.titleColor}
                title="Express Hire"
                subtitle="June 2019"
                description="American Express was increasing their technology team at a rapid pace and needed a better way to keep track of the hiring process."
                projectSummary="I worked in a team of 5 interns, building a Salesforce application from the ground up to keep track of each applicant in the hiring pipeline."
                role="Once the inital setup was completed, I was tasked with creating metrics to display relevant charts, graphs, and statistics involving the hiring process for the hiring leaders dashboard. I also created a round robin scheduler to match candidate and interviewer times, ensuring each interviewer got an equal workload."
                tasks={tasks}
            />
            <h3 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h3>
        </div>
    )
}

export default ExpressHire;