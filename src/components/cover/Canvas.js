import React, { Component } from "react";

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 0
        };

        this.drawCanvas = this.drawCanvas.bind(this);
        this.loadGraphic = this.loadGraphic.bind(this);
    }

    loadGraphic() {
        fetch("svg/" + this.props.svg + ".svg")
            .then(dataWrappedByPromise => dataWrappedByPromise.text())
            .then(data => {
                var svgGraphic = data;

                var img = new Image();

                // Replace color

                img.src =
                    "data:image/svg+xml;charset=utf-8," +
                    svgGraphic.replace(/#ff0000/g, this.props.fg);
                img.onload = () => {
                    this.setState(
                        {
                            img: img.src
                        },
                        () => {
                            this.drawCanvas();
                        }
                    );
                };
            });
    }

    drawCanvas() {
        const ctx = this.refs.canvas.getContext("2d");

        ctx.fillStyle = this.props.bg;
        ctx.fillRect(0, 0, this.props.width, this.props.height);
        ctx.stroke();

        // Text

        ctx.save();
        ctx.translate(0,0 - this.props.fontSize);
        ctx.fillStyle = this.props.fg;
        ctx.textBaseline = "top";

        ctx.font =
            this.props.fontWeight +
            " " +
            this.props.height * this.props.fontSize +
            "px "+ this.props.fontFamily;
        ctx.textAlign = "end";
        ctx.fillText(
            this.props.title,
            this.props.width - this.props.width * 0.025,
            this.props.width * 0.025 + (this.props.width * 0.025 * this.props.fontTranslateY)
        );

        ctx.textAlign = "start";
        ctx.fillText(
            this.props.artist,
            0 + this.props.width * 0.025,
            this.props.width * 0.025 + (this.props.width * 0.025 * this.props.fontTranslateY)
        );

        ctx.restore();



        var svgX = ctx.canvas.width * 0.5 + (this.props.translateX*ctx.canvas.width*0.5);
        var svgY = ctx.canvas.height * 0.5 + (this.props.translateY*ctx.canvas.width*0.5);

        ctx.save();

        ctx.translate(svgX, svgY);

        // console.log(this.props.translateX)

        ctx.rotate(Math.PI / 180 * this.props.svgRotation);

        var img = new Image();

        img.src = this.state.img;

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
        this.loadGraphic();
        console.log("mount!");
    }

    componentDidUpdate(prevProps) {
        if (this.props.svg !== prevProps.svg) {
            this.loadGraphic();
            console.log("graphic loaded");
        } else if (this.props.fg !== prevProps.fg) {
            console.log("graphic loaded");
            this.loadGraphic();
        } else {
            // Else draw canvas without loadGraphic for better performance

            this.drawCanvas();
        }
    }

    render() {
        return (
            <section id="artboard" className={"view"+this.props.view}>
                <div className="recordWrapper">
                    <div className="record" style={this.props.coverStyle}>
                        <div
                            style={{
                                width: this.props.width,
                                height: this.props.height
                            }}
                            className="vinyl"
                        />

                        <canvas
                            className="cover"
                            ref="canvas"
                            id="theCanvas"
                            path={"svg/" + this.props.svg + ".svg"}
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
