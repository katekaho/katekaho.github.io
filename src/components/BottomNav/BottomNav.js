import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

function BottomNav(props) {
    return (
        <div className="btm-nav-container" style={{fontWeight: props.currentPage === 'home' ? 'bold' : 'normal'}}>
            <li className="btm-nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="btm-nav-item" style={{fontWeight: props.currentPage === 'about' ? 'bold' : 'normal'}}>
                <Link to="/About">About me</Link>
            </li>
            <li className="btm-nav-item" style={{fontWeight: props.currentPage === 'projects' ? 'bold' : 'normal'}}>
                <Link to="/Projects">Projects</Link>
            </li>
            <li className="btm-nav-item" style={{fontWeight: props.currentPage === 'art' ? 'bold' : 'normal'}}>
                <Link to="/Art">Art</Link>
            </li>
        </div>
    )
}

export default BottomNav;