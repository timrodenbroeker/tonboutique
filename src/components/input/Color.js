import React, { Component } from 'react';

class Color extends Component {



  constructor(props){
    super(props);
    this.state = {
      color: this.props.color
    }
  }
  render() {

    const css = {background: this.props.colr};

    return (
    	<div className="colorWrapper">
		<div style={css} className="color" onClick="">
    		
		</div>

		<div className="colorName"></div>
		</div>

    );
  }
}

export default Color;
