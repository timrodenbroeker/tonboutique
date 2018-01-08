import React, { Component } from 'react';
import Color from './Color';

class ModalColors extends Component {

  render() {

  	  	 var Data = this.props.colors,
            MakeItem = function(X) {
                return <Color colr={X}>{X}</Color>;
            };


    return (
		<div target={this.props.target} className="ModalColorsWrapper">
      <div className="ModalColors">
    		{Data.map(MakeItem)}
        </div>
		</div>
    );
  }
}

export default ModalColors;
