import React, { Component } from 'react';
import "./Home.css";
import Hills from '../Hills/Hills';
import PageHeader from '../PageHeader/PageHeader';
import BottomNav from '../BottomNav/BottomNav';
import { useMediaQuery } from 'react-responsive';

function Home(props) {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 768});
    return (
        // style={{background: `linear-gradient(180deg, ${this.state.colorPalette[0]} 0%, #FEFEFE 60.42%)`}
        <div className="home-container">
            <div className="text-container">
                <PageHeader 
                    titleColor={props.palette[6]}
                    title="Hello"
                    subtitle="Welcome to my personal website"
                    description="I’m Kate Miller, a software developer from California."
                />
                <h2>My interests include design, sustainability, and using technology for social good.</h2>
            </div>
            <Hills palette={props.palette}/>
            {!isDesktopOrLaptop && <BottomNav/>}
        </div>
    )
}

export default Home;