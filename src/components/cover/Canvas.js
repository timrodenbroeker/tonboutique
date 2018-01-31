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

    }

    this.drawCanvas = this.drawCanvas.bind(this); 
}


drawCanvas(){

    const ctx = this.refs.canvas.getContext("2d");

    ctx.fillStyle = this.state.bg;
    ctx.fillRect(0,0,this.state.canvasW,this.state.canvasH);
    ctx.stroke();
    ctx.fillStyle = this.state.fg;
    ctx.textBaseline="top"; 
    ctx.font = this.state.fontWeight + " " + this.state.fontSizeInPercent +"px lf";
    ctx.textAlign="end";    
    ctx.fillText(this.state.title, this.state.canvasW - this.state.fontPadding, 0+this.state.fontPadding);

    ctx.textAlign="start"; 
    ctx.fillText(this.state.artist, 0+this.state.fontPadding, 0+this.state.fontPadding);

    var svgX = ctx.canvas.width * .5;
    var svgY = ctx.canvas.height * .5;


    // Load the SVG-file asynchronous laden

    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

    // When ready...

    if (this.readyState == 4 && this.status == 200) {

        var knopf = this.response;

        var img = new Image();

        var newKnopf = knopf.replace(/#ff0000/g, this.state.fg);

        // TypeError: Cannot read property 'fg' of undefined

        

        img.src = "data:image/svg+xml;charset=utf-8," + newKnopf;



        setTimeout(function(){ 
            ctx.save(); 

            ctx.translate(() => this.state.svgX, () => this.state.svgY);   
            ctx.rotate( () => (Math.PI / 180) * this.state.rotation);


    // Draw the SVG to the canvas

            ctx.drawImage(img, () => 0-this.state.this.state.svgW/2, () => 0-this.state.svgH/2, () => this.state.svgW, () => this.state.svgH);
            ctx.restore();

    }, 30);



        }
      };
      xhttp.open("GET", 'svg/' + this.props.svg + '.svg', true);
      xhttp.send();
    

}

componentDidMount(){
    this.drawCanvas()
}

componentDidUpdate(){
    this.drawCanvas()
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
