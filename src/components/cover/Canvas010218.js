/*

    Problems: 
    Fonts


*/



import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props){
    super(props);
    this.state = {
        img : 0,
        svgGraphic: 0
    }   

    this.drawCanvas = this.drawCanvas.bind(this); 
    this.loadGraphic = this.loadGraphic.bind(this); 

}

loadGraphic(){

    // I need to reference this from the XMLHttpRequest-object,
    // That's why i assign it to a variable

    var comp = this;


    // Temporary variables

    var svgGraphic, img;


    // xhttp-request

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        // When ready...

        if (this.readyState == 4 && this.status == 200) {

            svgGraphic = this.response;

            img = new Image();

            img.src = "data:image/svg+xml;charset=utf-8," + svgGraphic.replace(/#ff0000/g, comp.props.fg);



            // Here i save img and svgGraphic to the state
            // ( Is that necessary? )

            comp.setState({img: img,svgGraphic: svgGraphic});

        }
    };
    
    xhttp.open("GET", 'svg/' + this.props.svg + '.svg', true);
    xhttp.send();

}



drawCanvas(){ 

    const ctx = this.refs.canvas.getContext("2d");

    ctx.fillStyle = this.props.bg;
    ctx.fillRect(0,0,this.props.width,this.props.height);
    ctx.stroke();
    ctx.fillStyle = this.props.fg;
    ctx.textBaseline="top"; 
    ctx.font = this.props.fontWeight + " " + this.props.height * this.props.fontSize +"px lf";
    ctx.textAlign="end";    
    ctx.fillText(this.props.title, this.props.width - this.props.width * 0.025, 0+this.props.width * 0.025);

    ctx.textAlign="start"; 
    ctx.fillText(this.props.artist, 0+this.props.width * 0.025, 0+this.props.width * 0.025);

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
    console.log('mount!!!!!');
}

// componentDidUpdate(){
    
// }

// Fire this only when this.props.svg changes
//
componentDidUpdate(prevProps) {
    console.log('update!!!!!');
    if(this.props.svg !== prevProps.svg) {
        this.loadGraphic();    
    } else {
        this.drawCanvas();
    }
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
