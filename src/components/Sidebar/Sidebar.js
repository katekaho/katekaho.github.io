import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

import "./Sidebar.css";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar-wrapper" style={{backgroundColor: this.props.palette[6]}}>
                <div className="header-wrapper">
                    <div className="header-info">
                        <div className="logo">
                            <svg width="100" height="100" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.7203 11.7775L19.0617 48.7491C18.9681 49.2689 19.3639 49.7481 19.8919 49.7544L25.1539 49.8175C25.5495 49.8222 25.8966 49.5546 25.9926 49.1707L29.696 34.3638C29.8865 33.6023 30.9172 33.4796 31.2812 34.1751L39.22 49.3468C39.3673 49.6283 39.6587 49.8048 39.9765 49.8049L45.3892 49.8059C46.0238 49.806 46.4368 49.1384 46.1535 48.5706L37.0203 30.264C36.8687 29.9601 36.9115 29.5953 37.1294 29.3348L51.2284 12.4811C51.6934 11.9253 51.2983 11.0793 50.5735 11.0792L44.3638 11.0781C44.1104 11.078 43.87 11.1905 43.7077 11.3851L33.1453 24.0511C32.5747 24.7354 31.469 24.1983 31.6541 23.3268L34.0373 12.1054C34.1502 11.5741 33.745 11.0739 33.2019 11.074L26.5607 11.0748C26.1475 11.0749 25.7936 11.3708 25.7203 11.7775Z" 
                                fill={this.props.palette[4]}/>
                                <path d="M19.7423 11.7775L13.0836 48.7491C12.99 49.2689 13.3858 49.7481 13.9139 49.7544L19.1759 49.8175C19.5715 49.8222 19.9186 49.5546 20.0146 49.1707L23.718 34.3638C23.9085 33.6023 24.9392 33.4796 25.3031 34.1751L33.2419 49.3468C33.3892 49.6283 33.6807 49.8048 33.9984 49.8049L39.4112 49.8059C40.0458 49.806 40.4588 49.1384 40.1755 48.5706L31.0422 30.264C30.8906 29.9601 30.9335 29.5953 31.1514 29.3348L45.2504 12.4811C45.7154 11.9253 45.3202 11.0793 44.5955 11.0792L38.3857 11.0781C38.1323 11.078 37.892 11.1905 37.7297 11.3851L27.1673 24.0511C26.5967 24.7354 25.491 24.1983 25.6761 23.3268L28.0593 12.1054C28.1721 11.5741 27.7669 11.0739 27.2238 11.074L20.5827 11.0748C20.1695 11.0749 19.8156 11.3708 19.7423 11.7775Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="site-title">
                            Kate <span>Kaho</span>
                        </div>
                        <div className="site-title-caption">
                            Developer. Designer. Artist.
                        </div>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <ul className="navbar-list">
                            <Link to="/"><li className={this.props.selected === "home" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "home" ? '#DDE8F2' : this.props.palette[4],
                                                    color: this.props.selected === "home" ? this.props.palette[4] : 'white'}
                                                }
                                        >Home</li></Link>
                            <Link to="/About"><li className={this.props.selected === "about" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "about" ? '#DDE8F2' : this.props.palette[4],
                                                    color: this.props.selected === "about" ? this.props.palette[4] : 'white'}
                                                }
                                        >About me</li></Link>
                            <Link to="/Projects"><li className={this.props.selected === "projects" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "projects" ? '#DDE8F2' : this.props.palette[4],
                                                    color: this.props.selected === "projects" ? this.props.palette[4] : 'white'}
                                                }
                                        >Projects</li></Link>
                            <Link to="/Art"><li className={this.props.selected === "art" ? "navbar-item selected" : "navbar-item"}
                                                style={
                                                    {backgroundColor: this.props.selected === "art" ? '#DDE8F2' : this.props.palette[4],
                                                    color: this.props.selected === "art" ? this.props.palette[4] : 'white'}
                                                }
                                        >Art</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}