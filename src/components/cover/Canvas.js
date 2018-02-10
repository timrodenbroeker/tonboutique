import React, { Component } from "react";
import Graphics from "../../data/Graphics";
import ImageA from '../../data/1.jpg';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.drawCanvas = this.drawCanvas.bind(this);
    }


    drawCanvas() {

        var img = new Image();

        var comp = this;

        img.src =
            "data:image/svg+xml;charset=utf-8," 
            + '<svg fill=' 
            + '"' 
            + comp.props.fg 
            + '" ' 
            + Graphics.graphics[comp.props.svg];

        const ctx = this.refs.canvas.getContext("2d");

        ctx.fillStyle = this.props.bg;
        ctx.fillRect(0, 0, this.props.width, this.props.height);
        ctx.stroke();

        // Text

        ctx.save();
        ctx.translate(0, 0 - this.props.fontSize);
        ctx.fillStyle = this.props.fg;
        ctx.textBaseline = "top";

        // Title

        ctx.font =
            this.props.fontWeightTitle +
            " " +
            this.props.height * this.props.fontSize +
            "px " +
            this.props.fontFamily;

        ctx.textAlign = "end";
        ctx.fillText(
            this.props.title,
            this.props.width - this.props.width * 0.025,
            this.props.width * 0.025 +
                this.props.width * 0.025 * this.props.fontTranslateY
        );

        // Artist

        ctx.font =
            this.props.fontWeight +
            " " +
            this.props.height * this.props.fontSize +
            "px " +
            this.props.fontFamily;

        ctx.textAlign = "start";
        ctx.fillText(
            this.props.artist,
            0 + this.props.width * 0.025,
            this.props.width * 0.025 +
                this.props.width * 0.025 * this.props.fontTranslateY
        );

        ctx.restore();

        var svgX =
            ctx.canvas.width * 0.5 +
            this.props.translateX * ctx.canvas.width * 0.5;
        var svgY =
            ctx.canvas.height * 0.5 +
            this.props.translateY * ctx.canvas.width * 0.5;

        ctx.save();

        ctx.translate(svgX, svgY);

        ctx.rotate(Math.PI / 180 * this.props.svgRotation);

        // Draw Img

        ctx.drawImage(
            img,
            0 - this.props.width * this.props.scale / 2,
            0 - this.props.width * this.props.scale / 2,
            this.props.width * this.props.scale,
            this.props.width * this.props.scale
        );

        ctx.restore();
    }

    componentDidMount() {

        // Diese Funktion wird erst gefeuert, wenn das HTML-Markup 
        // aufgebaut ist, damit die Canvas bereits existiert, 
        // wenn die drawCanvas()-Funktion ausgeführt wird

        console.log('mount!');

        this.drawCanvas();

    }

    componentDidUpdate() {

        // Bei jeder Änderung eines Props oder eines States wird dieser
        // Funktion abgefeuert

        console.log('update!');

        this.drawCanvas();

    }

    render() {
        return (
            <section id="artboard" className={"view" + this.props.view}>

                <div className="recordWrapper">
                    <div className="record" style={this.props.coverStyle}>
                        <div
                            style={{
                                width: 600,
                                height: 600
                            }}
                            className="vinyl"
                        />

                        <canvas
                            className="cover"
                            ref="canvas"
                            id="theCanvas"
                            width={this.props.width}
                            height={this.props.height}
                            scale={this.props.scale}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Canvas;
