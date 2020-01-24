import React, { Component } from 'react';
import "./Home.css";
import Hills from '../Hills/Hills';

// parallax credit goes to https://codepen.io/samdbeckham/pen/OPXPNp

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // style={{background: `linear-gradient(180deg, ${this.state.colorPalette[0]} 0%, #FEFEFE 60.42%)`}
            <div className="home-container">
                <div>Hello</div>
                    <Hills palette={this.props.palette}/>
            </div>
        )
    }
}