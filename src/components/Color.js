import React, { Component } from 'react';

class Color extends Component {

  render() {

    const css = {background: this.props.colr};

    return (
		<div style={css} className="color">
    		<div>{this.props.children}</div>
		</div>
    );
  }
}

export default Color;
