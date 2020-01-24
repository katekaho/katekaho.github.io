import React, { Component } from 'react';

import "./ThemeFontSelector.css";

export default class ThemeFontSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selector-wrapper">
                <div className="selector">
                    <p className="button-label"
                        style={{color: this.props.palette[6]}}>
                        Color theme
                    </p>
                    <div className="button-container">
                        <button className="theme-button" onClick={() => this.props.newColor()}
                                style={{backgroundColor: this.props.palette[5]}}>Random</button>
                        <button className="theme-button" onClick={() => this.props.setColorGray()} 
                            style={{backgroundColor: this.props.palette[5]}}>Monochromatic</button>
                    </div>
                </div>
                <div className="selector">
                    <p className="button-label"
                        style={{color: this.props.palette[6]}}>
                        Font family
                    </p>
                    <div className="button-container">
                        <button className="theme-button" onClick={() => this.props.setFontDefault()} 
                                style={{backgroundColor: this.props.palette[5]}}>Default</button>
                        <button className="theme-button" onClick={() => this.props.setFontDyslexic()} 
                                style={{backgroundColor: this.props.palette[5]}}>Open dyslexic</button>
                    </div>
                </div>
            </div>
        )
    }
}