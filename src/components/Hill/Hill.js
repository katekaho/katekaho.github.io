import React, { Component } from 'react';
import {perlin2, seed} from 'simplenoise';
import "./Hill.css";

export default class Hill extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(0,300);

        seed(Math.random());

        for (var x = 0; x < canvas.width; x++) { 
            let value = Math.abs(perlin2(x/60, canvas.height/90));
            ctx.lineTo(x, canvas.height-(value*80)-150);
        }
        ctx.lineTo(canvas.width,300);
        ctx.closePath();
        var my_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        my_gradient.addColorStop(0, this.props.topColor);
        my_gradient.addColorStop(1, this.props.bottomColor);
        ctx.fillStyle = my_gradient;
        ctx.fill();
        // ctx.stroke();
    }

    render() {
        return (
            <canvas className="canvas" ref="canvas" width="1400px" height="300px"></canvas>
        )
    }
}