import React, { Component } from 'react';
import Color from './Color';

class ColorBox extends Component {

  render() {

  	  	 var Data = this.props.colors,
            MakeItem = function(X) {
                return <Color colr={X}>{X}</Color>;
            };


    return (
		<div target={this.props.target} className="colorBox">
    		{Data.map(MakeItem)}
		</div>
    );
  }
}

export default ColorBox;
