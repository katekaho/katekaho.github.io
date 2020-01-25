import React from 'react';
import ProjectText from '../../ProjectText/ProjectText';
import { Link } from 'react-router-dom';
import BottomNav from '../../../BottomNav/BottomNav';
import './Cryptanna.css';
import CryptannaOriginal from '../../../images/CryptannaOriginal.png';
import CryptannaOriginalScreens from '../../../images/CryptannaOriginalScreens.png';
import CryptannaNew from '../../../images/CryptannaNew.png';
import CryptannaNewScreens from '../../../images/CryptannaNewScreens.png';

function Cryptanna(props) {
    return (
        <div className="text-container">
            <ProjectText
                titleColor={props.titleColor}
                title="Cryptanna"
                subtitle="January 2018"
                description="I saw potential to improve the overall user interface and experience of Cryptanna, a cryptocurrancy trading app."
                projectSummary="I worked in a team of 5 students on Cryptanna for a software design class. The project had been started outside of the class, but I joined during the class."
                role="I updated the overall design of the app for a more modern feel. I opted for a more flat icon design overall and came up with a user flow for the app which I created using Figma. I also implemented the login page for the app."
            />
            <h2><a href="https://www.cryptanna.com/">View Cryptanna's website here</a></h2>
            <div className="crypt-screenshots">
                <div className="crypt-logo">
                    <img className="crypt-img" src={CryptannaOriginal} alt="Original cryptanna logo"/>
                    <h3>Original logo</h3>
                </div>
                <div className="crypt-logo">
                    <img className="crypt-img" src={CryptannaNew} alt="New cryptanna logo"/>
                    <h3>New logo</h3>
                </div>
            </div>
            <div className="crypt-screenshots">
                <div className="crypt-logo">
                    <img className="crypt-img" src={CryptannaOriginalScreens} alt="Original cryptanna user UI design"/>
                    <h3>Original layout</h3>
                </div>
                <div className="crypt-logo">
                    <img className="crypt-img" src={CryptannaNewScreens} alt="New cryptanna UI design"/>
                    <h3>New layout</h3>
                </div>
            </div>
            <h4 className="back-link"><Link to="/projects">{"< Back to projects"}</Link></h4>
            <BottomNav/>
        </div>
    )
}

export default Cryptanna;