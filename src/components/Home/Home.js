import React, { Component } from 'react';
import "./Home.css";
import Hills from '../Hills/Hills';
import PageHeader from '../PageHeader/PageHeader'

// parallax credit goes to https://codepen.io/samdbeckham/pen/OPXPNp

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // style={{background: `linear-gradient(180deg, ${this.state.colorPalette[0]} 0%, #FEFEFE 60.42%)`}
            <div className="home-container">
                <div className="text-container">
                    <PageHeader 
                        titleColor={this.props.palette[6]}
                        title="Hello"
                        subtitle="Welcome to my personal website"
                        description="I’m Kate Miller, a software developer from California. My interests include design, sustainability, and using technology for social good."
                    />
                </div>
                <Hills palette={this.props.palette}/>
            </div>
        )
    }
}