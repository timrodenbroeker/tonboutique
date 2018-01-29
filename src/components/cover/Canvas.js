import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props){
    super(props);
    this.state = {}
}

drawCanvas(){

    // A function to load the images

    function loadDoc(url, cFunction) {
      var xhttp;
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(this.response);
          cFunction(this.response);
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
    }

    var fontWeight = this.props.fontWeight; 

    var c= document.getElementById("theCanvas");
    var ctx= c.getContext("2d");

    var canvasW = c.width;
    var canvasH = c.height;

    var fontPadding = canvasW * 0.025;
    var fontSizeInPercent = canvasH * this.props.fontSize;

    var canvasPadding = 100;

    var svgScalingFactor = 0.8;

    var svgW = this.props.svgWidth;
    var svgH = this.props.svgWidth;

    var bg = this.props.bg;
    var fg = this.props.fg;
    var rotation = this.props.svgRotation;

    var artist = this.props.name;
    var title = this.props.title;

    // Canvas 

    ctx.fillStyle = bg;
    ctx.fillRect(0,0,canvasW,canvasH);
    ctx.stroke();
    ctx.fillStyle = fg;
    ctx.textBaseline="top"; 
    ctx.font = fontWeight + " " + fontSizeInPercent +"px Libre Franklin";
    ctx.textAlign="end";    
    ctx.fillText(title, canvasW-fontPadding, 0+fontPadding);

    ctx.textAlign="start"; 
    ctx.fillText(artist, 0+fontPadding, 0+fontPadding);

    var svgX = ctx.canvas.width * .5;
    var svgY = ctx.canvas.height * .5;
    
    


    // Load file

    var filename = 1;

    loadDoc('svg/' + this.props.svg + '.svg', function(svgXml) {

            var knopf = svgXml;
            var img = new Image();
            var newKnopf = knopf.replace(/#ff0000/g, fg);
            img.src = "data:image/svg+xml;charset=utf-8," + newKnopf;

   setTimeout(function(){ 
            ctx.save(); 
            ctx.translate(svgX, svgY);   
            ctx.rotate( (Math.PI / 180) * rotation);
            ctx.drawImage(img, 0-svgW/2, 0-svgH/2, svgW, svgH);
            ctx.restore();
    }, 30);
    });

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
            <canvas className="cover"
                style={this.props.coverStyle}
                id="theCanvas"
                path={"svg/" + this.props.svg + ".svg"} 
                width="550" 
                height="550" 
            >
            </canvas>

        </section>
    );
  }
}

export default Canvas;
