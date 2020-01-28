import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {

    render() {
        return (
            <div className="sidebar-container" style={{backgroundColor: this.props.palette[6]}}>
            <div className="sidebar-wrapper">
                <div className="header-wrapper">
                    <div className="header-info">
                        <div className="logo">
                            <Link to="/"><svg width="60" height="60" viewBox="0 0 332 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M175.061 0H116.23C114.346 0 112.717 1.31564 112.32 3.15814L45.0424 315.658C44.5061 318.149 46.4047 320.5 48.9528 320.5H108.27C110.155 320.5 111.783 319.185 112.181 317.343L139.982 188.362C140.731 184.89 145.297 184.043 147.24 187.016L233.316 318.689C234.055 319.819 235.314 320.5 236.664 320.5H300.153C303.322 320.5 305.232 316.991 303.512 314.329L198.661 152.071C197.681 150.554 197.839 148.567 199.047 147.225L325.494 6.67531C327.81 4.10105 325.984 0 322.521 0H265.765C264.641 0 263.568 0.473237 262.81 1.3038L164.429 109.119C161.68 112.131 156.714 109.58 157.562 105.591L178.973 4.83143C179.502 2.34321 177.604 0 175.061 0Z" 
                                    fill={this.props.palette[4]}/>
                                <path d="M131.061 0H72.2305C70.3458 0 68.7168 1.31564 68.3201 3.15814L1.0424 315.658C0.506099 318.149 2.40466 320.5 4.9528 320.5H64.2703C66.1547 320.5 67.7835 319.185 68.1805 317.343L95.982 188.362C96.7305 184.89 101.297 184.043 103.24 187.016L189.316 318.689C190.055 319.819 191.314 320.5 192.664 320.5H256.153C259.322 320.5 261.232 316.991 259.512 314.329L154.661 152.071C153.681 150.554 153.839 148.567 155.047 147.225L281.494 6.67531C283.81 4.10105 281.984 0 278.521 0H221.765C220.641 0 219.568 0.473237 218.81 1.3038L120.429 109.119C117.68 112.131 112.714 109.58 113.562 105.591L134.973 4.83143C135.502 2.34321 133.604 0 131.061 0Z" fill="white"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="header-text">
                            <div className="site-title">
                                Kate <span>Kaho</span>
                            </div>
                            <div className="site-title-caption">
                                Developer. Designer. Artist.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <ul className="navbar-list">
                            <Link className="link" to="/"><li className={this.props.selected === "home" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "home" ? this.props.palette[0] : this.props.palette[4],
                                                    color: this.props.selected === "home" ? this.props.palette[4] : 'white'}
                                                }
                                        >Home</li></Link>
                            <Link className="link" to="/about"><li className={this.props.selected === "about" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "about" ? this.props.palette[0] : this.props.palette[4],
                                                    color: this.props.selected === "about" ? this.props.palette[4] : 'white'}
                                                }
                                        >About me</li></Link>
                            <Link className="link" to="/projects"><li className={this.props.selected === "projects" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "projects" ? this.props.palette[0] : this.props.palette[4],
                                                    color: this.props.selected === "projects" ? this.props.palette[4] : 'white'}
                                                }
                                        >Projects</li></Link>
                            <Link className="link" to="/art"><li className={this.props.selected === "art" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "art" ? this.props.palette[0] : this.props.palette[4],
                                                    color: this.props.selected === "art" ? this.props.palette[4] : 'white'}
                                                }
                                        >Art</li></Link>
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}