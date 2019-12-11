import React, { Component } from 'react';
import "./Parallax.scss";
import layer_0 from './layer_0.png';
import layer_1 from './layer_1.png';
import layer_2 from './layer_2.png';
import layer_3 from './layer_3.png';
import layer_4 from './layer_4.png';
import layer_5 from './layer_5.png';
import layer_6 from './layer_6.png';
import logo from './logo.svg';
import deer from './deer.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import mail from './mail.svg';
import deer_dark from './deer-dark.svg';
import deer_light from './deer-light.svg'; 
import Hill from '../Hill/Hill';
import palette from 'google-palette';

// parallax credit goes to https://codepen.io/samdbeckham/pen/OPXPNp

export default class Parallax extends Component {
    constructor(props) {
        super(props);
        this.generatePalette = this.generatePalette.bind(this);
        this.getNewPalette = this.getNewPalette.bind(this)
        this.state = {
            colorPalette: this.generatePalette()
        };
    }

    getNewPalette() {
        let newPalette = this.generatePalette();
        this.setState({colorPalette: newPalette});
    }

    generatePalette() {
        let paletteOptions = [
            'tol-sq',
            'cb-Blues',
            'cb-BuGn',
            'cb-BuPu',
            'cb-Greens',
            'cb-Greys',
            'cb-OrRd',
            'cb-PuBu',
            'cb-PuBuGn',
            'cb-PuRd',
            'cb-Purples',
            'cb-RdPu',
            'cb-Reds',
            'cb-YlGn',
            'cb-YlGnBu',
            'cb-YlOrBr',
            'cb-YlOrRd'
        ]
        let option = Math.floor(Math.random() * paletteOptions.length);
        console.log(option);
        let generated = palette(paletteOptions[option], 7);
        generated = generated.map(g => "#" + g);
        return generated;
    }


    render() {
        return (
            <div className="parallax" style={{background: `linear-gradient(180deg, ${this.state.colorPalette[0]} 0%, #FEFEFE 60.42%)`}}>
                <div className="top-bar">
                    <img src={logo} alt="logo" className="logo" />
                    <a href="#about" className="about-nav" style={{color: this.state.colorPalette[6]}} >About</a>
                </div>
                <div className="parallax__layer parallax__layer__1">
                    {/* <img src={layer_1} /> */}
                    <Hill topColor={this.state.colorPalette[1]} bottomColor="#FFFFFF"/>
                </div>
                <div className="parallax__layer parallax__layer__2">
                    {/* <img src={layer_2} />*/}
                    <Hill topColor={this.state.colorPalette[2]} bottomColor="#FFFFFF"/>
                </div>
                <div className="parallax__layer parallax__layer__3">
                    {/* <img src={layer_3} /> */}
                    <Hill topColor={this.state.colorPalette[3]} bottomColor="#FFFFFF"/>
                </div>
                <div className="parallax__layer parallax__layer__4">
                    {/* <img src={layer_4} /> */}
                    <Hill topColor={this.state.colorPalette[4]} bottomColor="#FFFFFF"/>
                </div>
                <div className="parallax__layer parallax__layer__5">
                    {/* <img src={layer_5} /> */}
                    <Hill topColor={this.state.colorPalette[5]} bottomColor="#FFFFFF"/>
                </div>
                <div className="parallax__layer parallax__layer__6">
                    {/* <img src={layer_6} /> */}
                    <Hill topColor={this.state.colorPalette[6]} bottomColor={this.state.colorPalette[6]}/>
                </div>
                <div className="parallax__cover" style={{background: this.state.colorPalette[6]}}>
                    <div className="scroll">
                        Scroll
                    </div>
                    <div className="about-container" id="about">
                        <div className="about-info">
                            <div className="introduction">
                                <div>
                                    I’m Kate Miller, a software developer living in California.
                                </div>
                                <div>
                                    I’m interested in design and using technology for social good.
                                </div>
                            </div>
                            <div className="icons">
                                <a href="https://github.com/katekaho">
                                    <img src={github} alt="github-icon"/>
                                </a>
                                <a href="https://www.linkedin.com/in/katekaho/">
                                    <img src={linkedin} alt="linkedin-icon"/>
                                </a>
                                <a href="mailto:kat3miller@gmail.com">
                                    <img src={mail} alt="mail-icon"/>
                                </a>
                            </div>
                        </div>
                        <div className="deer-icon">
                            {/* <img src={deer} alt="deer-icon"/> */}
                            <img src={deer_light} alt="deer-icon"/>
                            <img src={deer_dark} alt="deer-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}