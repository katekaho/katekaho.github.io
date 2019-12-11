import React, { Component } from 'react';
import "./Parallax.scss";
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
                    <a className="logo" onClick={this.getNewPalette}>
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="31" cy="31" r="31" fill="#1C2741"/>
                            <path d="M25.7203 11.7775L19.0617 48.7491C18.9681 49.2689 19.3639 49.7481 19.8919 49.7544L25.1539 49.8175C25.5495 49.8222 25.8966 49.5546 25.9926 49.1707L29.696 34.3638C29.8865 33.6023 30.9172 33.4796 31.2812 34.1751L39.22 49.3468C39.3673 49.6283 39.6587 49.8048 39.9765 49.8049L45.3892 49.8059C46.0238 49.806 46.4368 49.1384 46.1535 48.5706L37.0203 30.264C36.8687 29.9601 36.9115 29.5953 37.1294 29.3348L51.2284 12.4811C51.6934 11.9253 51.2983 11.0793 50.5735 11.0792L44.3638 11.0781C44.1104 11.078 43.87 11.1905 43.7077 11.3851L33.1453 24.0511C32.5747 24.7354 31.469 24.1983 31.6541 23.3268L34.0373 12.1054C34.1502 11.5741 33.745 11.0739 33.2019 11.074L26.5607 11.0748C26.1475 11.0749 25.7936 11.3708 25.7203 11.7775Z" fill={this.state.colorPalette[5]}/>
                            <path d="M19.7423 11.7775L13.0836 48.7491C12.99 49.2689 13.3858 49.7481 13.9139 49.7544L19.1759 49.8175C19.5715 49.8222 19.9186 49.5546 20.0146 49.1707L23.718 34.3638C23.9085 33.6023 24.9392 33.4796 25.3031 34.1751L33.2419 49.3468C33.3892 49.6283 33.6807 49.8048 33.9984 49.8049L39.4112 49.8059C40.0458 49.806 40.4588 49.1384 40.1755 48.5706L31.0422 30.264C30.8906 29.9601 30.9335 29.5953 31.1514 29.3348L45.2504 12.4811C45.7154 11.9253 45.3202 11.0793 44.5955 11.0792L38.3857 11.0781C38.1323 11.078 37.892 11.1905 37.7297 11.3851L27.1673 24.0511C26.5967 24.7354 25.491 24.1983 25.6761 23.3268L28.0593 12.1054C28.1721 11.5741 27.7669 11.0739 27.2238 11.074L20.5827 11.0748C20.1695 11.0749 19.8156 11.3708 19.7423 11.7775Z" fill="white"/>
                        </svg>
                    </a>
                    {/* <img src={logo} alt="logo" className="logo" /> */}
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