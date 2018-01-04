import React, { Component } from 'react';

class BoxGraphic extends Component {


  render() {
      const Graphix = this.props.graphix,
            MakeItem = function(X) {
                return <option value={X}>{X + ".svg"}</option>;
            };

    return (
    	<div className="group">
          <div className="boxHead">
            <h3>Graphic</h3>
          </div>
          <div className="boxBody">
            <div className="field">
                <h4>File</h4>

                <select value={this.props.svg} onChange={this.props.changeSvg}>{Graphix.map(MakeItem)}</select>


            </div>

                <div className="field">
                <h4>Fill-color</h4>
                <input value={this.props.svgFill} onChange={this.props.changeSvgFill}/>
                </div>

                <div className="field">
                <h4>Svg-Width</h4>
                <input value={this.props.svgWidth} onChange={this.props.changeSvgWidth}/>
                </div>

            </div>



         </div>

    );
  }
}

export default BoxGraphic;
