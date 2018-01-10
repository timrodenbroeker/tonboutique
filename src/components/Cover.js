import React, { Component } from 'react';
import ReactSVG from 'react-svg';

class Cover extends Component {

  render() {

  	const css = ".example path {fill:" + this.props.svgFill + ";}";

    return (
    	<section id="canvas">
            <div className="cover parent" style={this.props.coverStyle}>

          <style>{css}</style>
                <div className="child coverImage">

                <ReactSVG
                    path={"svg/" + this.props.svg + ".svg"} 
                    callback={svg => console.log(svg)}
                    className="example"
                    wrapperClassName="svgWrapper"
                    evalScript="always"
                    style={{
                      width: this.props.svgWidth, 
                      fill: this.props.svgFill,
                      transform: "rotate(" + this.props.svgRotation + "deg);"
                    }}
                  />

                </div>

                <div className="child cover">
                  <div id="textContainer" style={this.props.textContainerStyles}>
                  <div>
                      <h1 style={this.props.typoStyleArtist}>{this.props.name}</h1>
                      <h1 style={this.props.typoStyleTitle}>{this.props.title}</h1>
                      </div>
                    </div>
                </div>

                <div className="child cover sublineContainer">

                  <div className="subline">{this.props.subline}</div>
                </div>
              
            </div>
          </section>
    );
  }
}

export default Cover;
