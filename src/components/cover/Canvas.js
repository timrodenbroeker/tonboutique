/*

    This is a canvas-component that draws an asynchrounous loaded svg.

    The interface has various inputs to control the SVG-file, the size, rotation and fill. 

    The drawCanvas()-function works perfect. But if the props 'fg' or 'svg' change and i have to fire loadGraphic() before drawCanvas() i get a few bugs.

    MAIN ISSUES
    -----------

    1       The canvas is sometimes empty on initial load, because the loadGraphic() is not finished 
            before drawCanvas() is fired (i guess)

    2       when the svg-props 'fg' or 'svg' change, i have to fire loadGraphic() before drawCanvas()  
            And drawCanvas() has to wait for loadGraphic()
            
            How can this be done? 

    3       Because 'img' and 'svgGraphic' are saved to the state on loadGraphic(),
            'componentDidUpdate' triggers on 'componentDidMount'. (Is that a problem?)

*/



import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props){
    super(props);
    this.state = {
        img : 0
    }   

    this.drawCanvas = this.drawCanvas.bind(this); 
    this.loadGraphic = this.loadGraphic.bind(this); 

}

loadGraphic(){

    fetch('svg/' + this.props.svg + '.svg')
        .then(dataWrappedByPromise => dataWrappedByPromise.text())
        .then(data => {
        var svgGraphic = data;

            var img = new Image();

            // Replace color

            img.src = "data:image/svg+xml;charset=utf-8," + svgGraphic.replace(/#ff0000/g, this.props.fg);

            // Save img to state

            this.setState({
                img: img
            }, () => {
                this.drawCanvas();
            });

    });

} // close loadGraphic!



drawCanvas(){ 

    const ctx = this.refs.canvas.getContext("2d");

    ctx.fillStyle = this.props.bg;
    ctx.fillRect(0,0,this.props.width,this.props.height);

    var svgX = ctx.canvas.width * .5;   
    var svgY = ctx.canvas.height * .5;

    ctx.save(); 

    ctx.translate( svgX, svgY);   

    ctx.rotate( (Math.PI / 180) * this.props.svgRotation);

    console.log(this.state.img); 

    ctx.drawImage(this.state.img, 0-this.props.width*this.props.scale/2, 0-this.props.width*this.props.scale/2, this.props.width*this.props.scale, this.props.width*this.props.scale);

    ctx.restore();

}

componentDidMount(){
    this.loadGraphic();
    console.log('mount!');
}

componentDidUpdate(prevProps) {

    if(this.props.svg !== prevProps.svg) {

        this.loadGraphic();
        console.log('graphic loaded');
        
    } else if (this.props.fg !== prevProps.fg) {

        this.loadGraphic(); 

    } else {

        // Else draw canvas without loadGraphic for better performance

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
