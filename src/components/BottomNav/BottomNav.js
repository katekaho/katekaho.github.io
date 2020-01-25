import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

function BottomNav(props) {
    return (
        <div className="btm-nav-container" style={{backgroundColor: props.backgroundColor}}>
            <li className="btm-nav-item" style={{fontWeight: props.currentPage === 'home' ? 'bold' : 'normal'}}>
                <Link to="/">Home</Link>
            </li>
            <li className="btm-nav-item" style={{fontWeight: props.currentPage === 'about' ? 'bold' : 'normal'}}>
                <Link to="/about">About me</Link>
            </li>
            <li className="btm-nav-item" style={{fontWeight: props.currentPage === 'projects' ? 'bold' : 'normal'}}>
                <Link to="/projects">Projects</Link>
            </li>
            <li className="btm-nav-item" style={{fontWeight: props.currentPage === 'art' ? 'bold' : 'normal'}}>
                <Link to="/art">Art</Link>
            </li>
        </div>
    )
}

export default BottomNav;