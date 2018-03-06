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

  // So referenziert man konva-Elemente
  console.log(this.refs.theImage);

  this.refs.theImage.rotate(20);
  this.refs.theImage.translate(20,100);


  }

  render() {
    return (

      <Group>
        <Rect
        x={0}
        y={0}
        width={600}
        height={600}
        fill={this.props.bg}
      />
      <Image 
        image={this.state.image}
        fg={this.props.fg}
        bg={this.props.bg}    
        scale={this.props.scale}
        svgRotation={this.props.svgRotation}
        width={this.props.width}
        height={this.props.height}
        svgHeight={this.props.svgHeight}
        x={-this.props.width/2}
        y={-this.props.height/2}
        ref="theImage"
      />
      </Group>
    )
  }
}

export default Cover;