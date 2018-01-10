import React, { Component } from 'react';

class Color extends Component {

  render() {

    const css = {background: this.props.colr};

    return (
    	<div className="colorWrapper">
		<div style={css} className="color">
    		
		</div>
		<div className="colorName">{this.props.children}</div>
		</div>
    );
  }
}

export default Color;
