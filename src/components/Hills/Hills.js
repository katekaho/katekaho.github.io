import React, { Component } from 'react';
import {perlin2, seed} from 'simplenoise';
import "./Hills.css";

export default class Hills extends Component {
    constructor(props) {
        super(props);
        this.drawHill = this.drawHill.bind(this);
        this.clearHills = this.clearHills.bind(this);
    }

    drawHill(position) {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        // ctx.canvas.width = window.innerWidth;

        const initialHeight = 500;
        let addedHeight = (position)*55;

        ctx.beginPath();
        ctx.moveTo(0,initialHeight+addedHeight);

        seed(Math.random());

        for (var x = 0; x < canvas.width; x++) { 
            let value = Math.abs(perlin2(x/42, canvas.height/300));
            ctx.lineTo(x, canvas.height-(value*90)-450+addedHeight);
        }
        ctx.lineTo(canvas.width,initialHeight);
        ctx.closePath();
        var my_gradient = ctx.createLinearGradient(0, 0, 0, 550);
        my_gradient.addColorStop(0, 'white');
        my_gradient.addColorStop(1, this.props.palette[position]);
        ctx.fillStyle = my_gradient;
        ctx.fill();
    }

    clearHills() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    componentDidMount() {
        for (let i = 1; i < this.props.palette.length; i++) {
            this.drawHill(i);
        }
    }

    componentDidUpdate() {
        this.props.palette.forEach(position => this.drawHill(position));
        this.drawHills();
    }

    render() {
        return (
            <canvas className="canvas" ref="canvas" width="1000px" height="500px"></canvas>
        )
    }
}