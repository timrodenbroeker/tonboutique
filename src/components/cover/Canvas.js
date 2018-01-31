import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props){
    super(props);
    this.state = {
        fontWeight : this.props.fontWeight,
        canvasW : this.props.width,
        canvasH : this.props.height,
        fontPadding : this.props.width * 0.025,
        fontSizeInPercent: this.props.height * this.props.fontSize,
        svgScalingFactor : this.props.scale,
        svgW : this.props.width * this.props.scale,
        svgH : this.props.height * this.props.scale,
        bg : this.props.bg,
        fg : this.props.fg,
        rotation : this.props.svgRotation,
        artist : this.props.name,
        title : this.props.title,
        img : 0,
        knopf: 0
    }   

    this.drawCanvas = this.drawCanvas.bind(this); 
    this.loadGraphic = this.loadGraphic.bind(this); 

}

loadGraphic(){

    var comp = this;

    var knopf, img;

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        // When ready...

        if (this.readyState == 4 && this.status == 200) {

            knopf = this.response;

            img = new Image();

            img.src = "data:image/svg+xml;charset=utf-8," + knopf.replace(/#ff0000/g, comp.props.fg);

            comp.setState({img: img});

            comp.setState({knopf: knopf});

        }
    };
    
    xhttp.open("GET", 'svg/' + this.props.svg + '.svg', true);
    xhttp.send();

}



drawCanvas(){ 

    const ctx = this.refs.canvas.getContext("2d");

    ctx.fillStyle = this.props.bg;
    ctx.fillRect(0,0,this.state.canvasW,this.state.canvasH);
    ctx.stroke();
    ctx.fillStyle = this.props.fg;
    ctx.textBaseline="top"; 
    ctx.font = this.props.fontWeight + " " + this.props.height * this.props.fontSize +"px lf";
    ctx.textAlign="end";    
    ctx.fillText(this.props.title, this.state.canvasW - this.state.fontPadding, 0+this.state.fontPadding);

    ctx.textAlign="start"; 
    ctx.fillText(this.props.artist, 0+this.state.fontPadding, 0+this.state.fontPadding);

    var svgX = ctx.canvas.width * .5;   
    var svgY = ctx.canvas.height * .5;

    ctx.save(); 

    ctx.translate( svgX, svgY);   

    ctx.rotate( (Math.PI / 180) * this.props.svgRotation);

    ctx.drawImage(this.state.img, 0-this.props.width*this.props.scale/2, 0-this.props.width*this.props.scale/2, this.props.width*this.props.scale, this.props.width*this.props.scale);
    ctx.restore();

}

componentDidMount(){
    this.loadGraphic();
}

componentDidUpdate(){
    this.drawCanvas();
}

render() {

    return (
    	<section id="artboard">
            <div 
                className="record"
                style={this.props.coverStyle}>
                
                <div 
                    style={{
                        width: this.props.width,
                        height: this.props.height
                    }}
                    className="vinyl">
                </div>
                
                <canvas 
                    className="cover"
                    ref="canvas"
                    id="theCanvas"
                    path={"svg/" + this.props.svg + ".svg"} 
                    width={this.props.width}
                    height={this.props.height}
                    scale={this.props.scale}
                >
                </canvas>
            </div>
        </section>
    );
  }
}

export default Canvas;
