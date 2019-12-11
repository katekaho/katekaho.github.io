import React, { Component } from 'react';
import "./Birds.scss";

// Birds credit: https://codepen.io/matchboxhero/pen/RLebOY?editors=1100

export default class Birds extends Component {

    render() {
        return (
            <div class="container">
                
                <div class="bird-container bird-container--one">
                    <div class="bird bird--one"></div>
                </div>
                
                <div class="bird-container bird-container--two">
                    <div class="bird bird--two"></div>
                </div>
                
                <div class="bird-container bird-container--three">
                    <div class="bird bird--three"></div>
                </div>
                
                <div class="bird-container bird-container--four">
                    <div class="bird bird--four"></div>
                </div>
                
            </div>
        )
    }
}