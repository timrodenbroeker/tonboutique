import Graphics from "../../data/Graphics";
import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Image, Rect, Group } from "react-konva";

class Cover extends React.Component {
  state = {
    image: null
  };

  componentDidMount() {
    var svgGraphic = Graphics.graphics[this.props.svg];

    const image = new window.Image();
    image.src =
      "data:image/svg+xml;charset=utf-8," +
      svgGraphic.replace(/#121212/g, this.props.fg);
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };

  this.refs.theC.offset({x: 300,y: 300}); 
  this.refs.theC.rotation(this.props.svgRotation); 


  
  }

  componentDidUpdate(){
    this.refs.theC.offset({x: 300,y: 300}); 
    this.refs.theC.scale({x:this.props.scale,y:this.props.scale}); 
    this.refs.theC.rotation(this.props.svgRotation); 

  }

  componentWillReceiveProps(newProps){
    

    // If fg changed

    if( newProps.fg !== this.props.fg ){
     var svgGraphic = Graphics.graphics[this.props.svg];

        const image = new window.Image();
        image.src =
            "data:image/svg+xml;charset=utf-8," +
            svgGraphic.replace(/#121212/g, newProps.fg);
        image.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                image: image
            });
        };


    }


    if( newProps.svg !== this.props.svg ){
     var svgGraphic = Graphics.graphics[newProps.svg];

        const image = new window.Image();
        image.src =
            "data:image/svg+xml;charset=utf-8," +
            svgGraphic.replace(/#121212/g, this.props.fg);
        image.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                image: image
            });
        };


    }

  }



  render() {
    return (
      <Group>
        <Rect x={0} y={0} width={this.props.width} height={this.props.height} fill={this.props.bg} />
        <Image
          image={this.state.image}
          fg={this.props.fg}
          bg={this.props.bg}
          scale={this.props.scale}
          svgRotation={this.props.svgRotation}
          width={this.props.width}
          height={this.props.height}
          svgHeight={this.props.svgHeight}
          x={300+this.props.x*(this.props.width/2)}
          y={300+this.props.y*(this.props.height/2)}
          ref="theC"
        />
      </Group>
    );
  }
}

export default Cover;
