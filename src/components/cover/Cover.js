import React, { Component } from 'react';
import ReactSVG from 'react-svg';

class Cover extends Component {

  render() {

  	const css = ".example path {fill:" + this.props.fg + ";}";

    return (
    	<section id="artboard">
            <div className="cover parent" style={this.props.coverStyle}>

          <style>{css}</style>
                <div className="child coverImage">

                <ReactSVG
                    path={"svg/" + this.props.svg + ".svg"} 
                    className="example"
                    wrapperClassName="svgWrapper"
                    evalScript="always"
                    style={{
                      width: this.props.svgWidth, 
                      fill: this.props.fg,
                      transform: "rotate(" + this.props.svgRotation + "deg) translate(" + this.props.translateX + "px, " + this.props.translateY + "px)"
                    }}
                  />

                </div>

                <div className="child cover">
                  <div id="textContainer" style={this.props.textContainerStyles}>
                  <div>
                      <h1 className="artist" style={this.props.typoStyleArtist}>{this.props.name}</h1>
                      <h1 className="title" style={this.props.typoStyleTitle}>{this.props.title}</h1>
                      </div>
                    </div>
                </div>

                {/*

                <div className="child cover sublineContainer">

                  <div style={this.props.typoStyleSubline} className="subline">{this.props.subline}</div>
                </div>

              */ }
              
            </div>
          </section>
    );
  }
}

export default Cover;
