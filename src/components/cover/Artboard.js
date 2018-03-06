import Graphics from "../../data/Graphics";
import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Image } from "react-konva";
import Cover from "./Cover";

class Artboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        };
    }


  componentDidMount() {

  // So referenziert man konva-Elemente
  console.log(this.refs.theStage);




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

                         <Stage width={600} height={600} ref="theStage">
                            <Layer>
                                <Cover 
                                    width={600}
                                    height={600}
                                    svg={this.props.svg}
                                    fg={this.props.fg}
                                    bg={this.props.bg}    
                                    scale={this.props.scale}
                                    svgRotation={this.props.svgRotation}
                                    svgWidth={this.props.svgWidth}
                                    svgHeight={this.props.svgHeight}
                                    x={this.props.translateX}
                                    y={this.props.translateY}
                                />
                            </Layer>
                          </Stage>
                    </div>
                </div>
            </section>
        );
    }
}

export default Artboard;
